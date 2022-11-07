import React from 'react';
import s from './Counter.module.css';
import { Display } from './Display';
import { IncResetButtons } from './IncResetButtons';

type CounterPropsType = {
    count: number,
    minValue: number,
    maxValue: number,
    message: string,
    error: string,
    addCount: () => void,
    resetCount: () => void,
}

export function Counter(props: CounterPropsType) {

    return (
        <div className={s.counter}>
            <Display
                minValue={props.minValue}
                maxValue={props.maxValue}
                count={props.count}
                message={props.message}
                error={props.error}
            />
            <IncResetButtons
                minValue={props.minValue}
                maxValue={props.maxValue}
                count={props.count}
                message={props.message}
                error={props.error}
                addCount={props.addCount}
                resetCount={props.resetCount}
            />
        </div>
    );
}