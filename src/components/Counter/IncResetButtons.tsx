import React from 'react';
import s from './IncResetButtons.module.css';
import { Button } from '../Button';

type IncResetButtonsPropsType = {
    minValue: number,
    maxValue: number,
    count: number,
    message: string,
    error: string,
    addCount: () => void,
    resetCount: () => void,
}

export function IncResetButtons(props: IncResetButtonsPropsType) {

    return (
        <div className={s.incResetButtons}>
            <Button
                name={'inc'}
                className={s.button}
                callback={props.addCount}
                disabled={props.message || props.count === props.maxValue ? true : false}
            />
            <Button
                name={'reset'}
                className={s.button}
                callback={props.resetCount}
                disabled={props.message || props.count === props.minValue ? true : false}
            />
        </div>
    );
}