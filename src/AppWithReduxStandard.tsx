import React, { useEffect } from 'react';
import './App.css';
import { SettingsCounter } from './components/SettingsCounter/SettingsCounter';
import { Counter } from './components/Counter/Counter';
import { minInputAC, minInputLocStorAC } from './redux/minInput-reducer'
import { maxInputAC, maxInputLocStorAC } from './redux/maxInput-reducer'
import { incCounterAC, resCounterAC} from './redux/counter-reducer'
import { errorMinInputAC, errorMaxInputAC } from './redux/error-reducer'
import { messageAC, notMessageAC } from './redux/infoMessage-reducer'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './redux/store';

export function AppWithReduxStandard() {

    const dispatch = useDispatch()
    const minValue = useSelector<RootState, number>(s => s.minInput)
    const maxValue = useSelector<RootState, number>(s => s.maxInput)
    const count = useSelector<RootState, number>(s => s.counter)
    const error = useSelector<RootState, string>(s => s.error)
    const message = useSelector<RootState, string>(s => s.infoMessage)

    /* useEffect(() => {
        const minLS = localStorage.getItem('counter 1 - min value')
        const maxLS = localStorage.getItem('counter 1 - max value')
        let min, max
        if (minLS) {
            min = JSON.parse(minLS)
            dispatch(minInputLocStorAC(min))
            dispatch(resCounterAC(min))
        }
        if (maxLS) {
            max = JSON.parse(maxLS)
            dispatch(maxInputLocStorAC(max))
        }
    }, []) */

    function changeMinInput(value: number) {
        dispatch(messageAC())
        dispatch(errorMinInputAC(value, minValue, maxValue))
        dispatch(minInputAC(value))
    }
    
    function changeMaxInput(value: number) {
        dispatch(messageAC())
        dispatch(errorMaxInputAC(value, minValue, maxValue))
        dispatch(maxInputAC(value))
    }

    function setStartValue() {
        if (!error) {
            dispatch(notMessageAC())
            dispatch(resCounterAC(minValue))
        }
        //localStorage.setItem('counter 1 - min value', JSON.stringify(minValue))
        //localStorage.setItem('counter 1 - max value', JSON.stringify(maxValue))
    }
    
    function addCount() {
        dispatch(incCounterAC())
    }

    function resetCount() {
        dispatch(resCounterAC(minValue))
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