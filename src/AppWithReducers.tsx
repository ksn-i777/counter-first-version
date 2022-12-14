import React, { useEffect, useReducer } from 'react';
import './App.css';
import { SettingsCounter } from './components/SettingsCounter/SettingsCounter';
import { Counter } from './components/Counter/Counter';
import { minInputReducer, minInputAC, minInputLocStorAC } from './redux/minInput-reducer'
import { maxInputReducer, maxInputAC, maxInputLocStorAC } from './redux/maxInput-reducer'
import { counterReducer, incCounterAC, resCounterAC} from './redux/counter-reducer'
import { errorReducer, errorMinInputAC, errorMaxInputAC } from './redux/error-reducer'
import { messageReducer, messageAC, notMessageAC } from './redux/infoMessage-reducer'

export function AppWithReducers() {

    const [minValue, dispatchMinValue] = useReducer(minInputReducer, 0)
    const [maxValue, dispatchMaxValue] = useReducer(maxInputReducer, 5)
    const [count, dispatchCount] = useReducer(counterReducer, 0)
    const [error, dispatchError] = useReducer(errorReducer, '')
    const [message, dispatchMessage] = useReducer(messageReducer, '')

    useEffect(() => {
        const minLS = localStorage.getItem('counter 1 - min value')
        const maxLS = localStorage.getItem('counter 1 - max value')
        let min, max
        if (minLS) {
            min = JSON.parse(minLS)
            dispatchMinValue(minInputLocStorAC(min))
            dispatchCount(resCounterAC(min))
        }
        if (maxLS) {
            max = JSON.parse(maxLS)
            dispatchMaxValue(maxInputLocStorAC(max))
        }
    }, [])

    function changeMinInput(value: number) {
        dispatchMessage(messageAC())
        dispatchError(errorMinInputAC(value, minValue, maxValue))
        dispatchMinValue(minInputAC(value))
    }
    
    function changeMaxInput(value: number) {
        dispatchMessage(messageAC())
        dispatchError(errorMaxInputAC(value, minValue, maxValue))
        dispatchMaxValue(maxInputAC(value))
    }

    function setStartValue() {
        if (!error) {
            dispatchMessage(notMessageAC())
            dispatchCount(resCounterAC(minValue))
        }
        localStorage.setItem('counter 1 - min value', JSON.stringify(minValue))
        localStorage.setItem('counter 1 - max value', JSON.stringify(maxValue))
    }
    
    function addCount() {
       dispatchCount(incCounterAC())
    }

    function resetCount() {
       dispatchCount(resCounterAC(minValue))
    }

    return (
        <div className="App">
            <div className='wrapper'>
                <SettingsCounter
                    minValue={minValue}
                    maxValue={maxValue}
                    count={count}
                    message={message}
                    error={error}
                    changeMinInput={changeMinInput}
                    changeMaxInput={changeMaxInput}
                    setStartValue={setStartValue}
                />
                <Counter
                    minValue={minValue}
                    maxValue={maxValue}
                    count={count}
                    message={message}
                    error={error}
                    addCount={addCount}
                    resetCount={resetCount}
                />
            </div>
        </div>
    );
}