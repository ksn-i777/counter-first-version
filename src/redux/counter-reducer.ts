const INC_COUNTER = 'INC-COUNTER'
const RES_COUNTER = 'RES-COUNTER'

export type IncCounterActionType = {
    type: typeof INC_COUNTER
}
export type ResCounterActionType = {
    type: typeof RES_COUNTER
    value: number
}
export type CounterActionsType = IncCounterActionType | ResCounterActionType

export function counterReducer(state:number = 0, action:CounterActionsType):number {
    switch (action.type) {
        case INC_COUNTER:
            return state + 1
        case RES_COUNTER:
            return action.value
        default:
            return state
    }
}

export function incCounterAC():IncCounterActionType {
    return ({type: INC_COUNTER})
}
export function resCounterAC(value:number):ResCounterActionType {
    return ({type: RES_COUNTER, value: value})
}