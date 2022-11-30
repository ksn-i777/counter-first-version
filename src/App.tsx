import React, { useEffect, useState } from 'react';
import './App.css';
import { SettingsCounter } from './components/SettingsCounter/SettingsCounter';
import { Counter } from './components/Counter/Counter';

export function App() {

    const [minValue, setMinValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(5)
    const [count, setCount] = useState<number>(0)    
    const [error, setError] = useState<string>('')
    const [message, setMessage] = useState<string>('')

    const errorMessage = 'Incorrect value!'
    const messageMessage = "enter values and press 'set'"

    function changeMinInput(value: number) {
        setMessage(messageMessage)
        if(value < 0 || value >= maxValue) {setError(errorMessage)} else {setError('')}
        setMinValue(value)
    }
    function changeMaxInput(value: number) {
        setMessage(messageMessage)
        if(value < 0 || value <= minValue) {setError(errorMessage)} else {setError('')}
        setMaxValue(value)
    }
    function setStartValue() {
        if (!error) {
            setMessage('')
            setCount(minValue)
        }
        localStorage.setItem('minValue', JSON.stringify(minValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }
    useEffect(() => {
        const minLS = localStorage.getItem('minValue')
        const maxLS = localStorage.getItem('maxValue')
        let min
        let max
        if (minLS) {min = JSON.parse(minLS)}
        if (maxLS) {max = JSON.parse(maxLS)}
        setMinValue(min)
        setMaxValue(max)
    }, [])
    
    function addCount() {count < maxValue && setCount(count + 1)}
    function resetCount() {setCount(minValue)}

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