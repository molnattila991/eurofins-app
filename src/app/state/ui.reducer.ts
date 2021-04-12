import { createReducer, on } from "@ngrx/store";
import { UiState } from "../models/ui-state.interface";
import { closeSideNav, openSideNav } from "./ui.actions";

export const initialState = <UiState>{
    opened: true
}

const _uiReducer = createReducer(
    initialState,
    on(openSideNav, (state) => ({ ...state, opened: true })),
    on(closeSideNav, (state) => ({ ...state, opened: false }))
)

export function uiReducer(state: any, action: any) {
    return _uiReducer(state, action);
}