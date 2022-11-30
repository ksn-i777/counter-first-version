const MESSAGE = 'MESSAGE'
const NOT_MESSAGE = 'NOT-MESSAGE'

export type MessageActionType = {
    type: typeof MESSAGE
}
export type NotMessageActionType = {
    type: typeof NOT_MESSAGE
}
export type MessageActionsType = MessageActionType | NotMessageActionType

export function messageReducer(state:string, action:MessageActionsType):string {
    switch (action.type) {
        case MESSAGE:
            return "enter values and press 'set'"
        case NOT_MESSAGE:
            return ''
        default:
            return state
    }
}

export function messageAC():MessageActionType {
    return ({type: MESSAGE})
}
export function notMessageAC():NotMessageActionType {
    return ({type: NOT_MESSAGE})
}