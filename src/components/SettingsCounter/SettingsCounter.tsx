import React from 'react';
import s from './SettingsCounter.module.css';
import { Inputs } from './Inputs'
import { SetButton } from './SetButton'

type SettingsCounterPropsType = {
    minValue: number,
    maxValue: number,
    count: number,
    message: string,
    error: string,
    changeMaxInput: (value: number) => void,
    changeMinInput: (value: number) => void,
    setStartValue: () => void,
}

export function SettingsCounter(props: SettingsCounterPropsType) {

    return (
        <div className={s.settingsCounter}>
            <Inputs
                minValue={props.minValue}
                maxValue={props.maxValue}
                error={props.error}
                changeMinInput={props.changeMinInput}
                changeMaxInput={props.changeMaxInput}
            />
            <SetButton
                count={props.count}
                message={props.message}
                error={props.error}
                setStartValue={props.setStartValue}
            />
        </div>
    );
}
