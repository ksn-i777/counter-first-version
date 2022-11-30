import { combineReducers, createStore } from 'redux'
import { minInputReducer } from './minInput-reducer'
import { maxInputReducer } from './maxInput-reducer'
import { counterReducer } from './counter-reducer'
import { errorReducer } from './error-reducer'
import { messageReducer } from './infoMessage-reducer'

const rootReducer = combineReducers({
    minInput: minInputReducer,
    maxInput: maxInputReducer,
    counter: counterReducer,
    error: errorReducer,
    infoMessage: messageReducer
})

export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)