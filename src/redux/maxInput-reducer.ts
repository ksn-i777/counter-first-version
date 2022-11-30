const CHANGE_MAX_INPUT = 'CHANGE-MAX-INPUT'
const LOCAL_STORAGE = 'LOCAL-STORAGE'

export type MaxInputActionType = {
    type: typeof CHANGE_MAX_INPUT
    value: number
}
export type LocalStorageActionType = {
    type: typeof LOCAL_STORAGE
    value: number
}
export type ActionsType = MaxInputActionType | LocalStorageActionType

export function maxInputReducer(state:number = 5, action:ActionsType):number {
    switch (action.type) {
        case CHANGE_MAX_INPUT:
            return action.value > state ? state + 1 : state - 1
        case LOCAL_STORAGE:
            return action.value
        default:
            return state
    }
}
export function maxInputAC(value:number):MaxInputActionType {
    return ({type: CHANGE_MAX_INPUT, value: value})
}
export function maxInputLocStorAC(value:number):LocalStorageActionType {
    return ({type: LOCAL_STORAGE, value: value})
}