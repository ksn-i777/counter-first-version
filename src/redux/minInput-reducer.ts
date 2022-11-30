const CHANGE_MIN_INPUT = 'CHANGE-MIN-INPUT'
const LOCAL_STORAGE = 'LOCAL-STORAGE'

export type MinInputActionType = {
    type: typeof CHANGE_MIN_INPUT
    value: number
}
export type LocalStorageActionType = {
    type: typeof LOCAL_STORAGE
    value: number
}
export type ActionsType = MinInputActionType | LocalStorageActionType

export function minInputReducer(state:number = 0, action:ActionsType):number {
    switch (action.type) {
        case CHANGE_MIN_INPUT:
            return action.value > state ? state + 1 : state - 1
        case LOCAL_STORAGE:
            return action.value
        default:
            return state
    }
}
export function minInputAC(value:number):MinInputActionType {
    return ({type: CHANGE_MIN_INPUT, value: value})
}
export function minInputLocStorAC(value:number):LocalStorageActionType {
    return ({type: LOCAL_STORAGE, value: value})
}