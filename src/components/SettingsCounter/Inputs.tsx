import React, {ChangeEvent} from 'react';
import s from './Inputs.module.css';

type InputsPropstype = {
    minValue: number,
    maxValue: number,
    error:string,
    changeMaxInput: (value: number) => void,
    changeMinInput: (value: number) => void,
}

export function Inputs(props: InputsPropstype) {

    function onChangeMaxInput(e: ChangeEvent<HTMLInputElement>) {
        props.changeMaxInput(+e.currentTarget.value)
    }
    function onChangeMinInput(e: ChangeEvent<HTMLInputElement>) {
        props.changeMinInput(+e.currentTarget.value)
    }

    return (
        <div className={s.inputs}>
            <div className={s.inputItem}>
                <span className={s.inputText}>start value:</span>
                <input
                    type="number"
                    value={props.minValue}
                    className={props.error ? s.inputError : s.input}
                    onChange={onChangeMinInput}
                />
            </div>
            <div className={s.inputItem}>
                <span className={s.inputText}>max value:</span>
                <input
                    type="number"
                    value={props.maxValue}
                    className={props.error ? s.inputError : s.input}
                    onChange={onChangeMaxInput}
                />
            </div>
        </div>
    );
}

