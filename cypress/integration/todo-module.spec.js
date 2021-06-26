/// <reference types="Cypress" />

import {todos} from "../fixtures/todos_init.json"

describe("Todo Page", ()=>{
    beforeEach(()=>{
        cy.intercept("GET", "http://localhost:5000/todo", todos);
        cy.visit('/');
    })

    it("should navigate to todo page", ()=>{
        cy.get(".mat-list-item-content").should("have.length", 4);
    });

    describe("Edit todo", ()=>{
        beforeEach(()=>{
            cy.get(":nth-child(1) > .mat-list-item-content > :nth-child(5) > .mat-button-wrapper > .mat-icon").click();

        });

        it('should open edit dialog', ()=>{
            cy.get("#mat-input-1").should('have.value', 'title 1');
            cy.get("#mat-input-2").should('have.value', 'desc');
        });

        it('should edit dialog without error', ()=>{
            var todosClone = JSON.parse(JSON.stringify(todos));
            var selectedTodoItem = todosClone[0];
            selectedTodoItem.title = 'title 1 new text';
            selectedTodoItem.description ='description 1 new text';
            selectedTodoItem.isCompleted = false;
    
            cy.get("#mat-input-1").clear({force: true}).type('title 1 new text');
            cy.get("#mat-input-2").clear({force: true}).type('description 1 new text');
            cy.get("#mat-checkbox-5 > .mat-checkbox-layout > .mat-checkbox-label").click();
    
            cy.intercept("PUT", "http://localhost:5000/todo", {});
            cy.intercept("GET", "http://localhost:5000/todo", todosClone);
    
            cy.get('[cdkfocusinitial=""] > .mat-button-wrapper').click();

            cy.get(".mat-list-item-content").should("have.length", 4);
            cy.get(':nth-child(1) > .mat-list-item-content > table > :nth-child(1) > :nth-child(3) > .todo-item-text > b').should('have.html', 'title 1 new text');

        });

        describe("Validate title input",()=>{
            var input1;
            var input2;
            beforeEach(()=>{
                input1 = cy.get("#mat-input-1");

                input1.clear({force: true});
            });

            it('should give required error message', ()=>{
                cy.get('#mat-input-2').focus();
                cy.get('#mat-error-0').should('have.html', ' Required ');
                cy.get('.mat-button-disabled').should('be.disabled');
            });

            it('should give min length error message', ()=>{
                input1.type('me');
                cy.get('#mat-input-2').focus();
                cy.get('#mat-error-1').should('have.html', ' Title must be at least 3 characters long. ');
                cy.get('.mat-button-disabled').should('be.disabled');
            });
        });

        describe("Validate desc input",()=>{
            beforeEach(()=>{
                cy.get("#mat-input-2").clear({force: true});
                cy.get('.mat-button-disabled').should('be.disabled');
            });

            it('should give required error message', ()=>{
                cy.get('#mat-input-1').focus();
                cy.get('#mat-error-0').should('have.html', ' Required ');
                cy.get('.mat-button-disabled').should('be.disabled');
            });
        });
    });
});