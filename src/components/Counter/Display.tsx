import React from 'react';
import s from './Display.module.css';

type DisplayPropsType = {
    minValue: number,
    maxValue: number,
    count: number,
    message: string,
    error: string,
}

export function Display(props: DisplayPropsType) {
    return (
        <div className={
            props.error ? s.info + ' ' + s.error :
            props.message ? s.info + ' ' + s.message :
            props.count === props.maxValue ? s.info + ' ' + s.numberMax :
            s.info}>
            {
            props.error ? props.error :
            props.message ? props.message :
            props.count === props.maxValue ? props.count + ' max' : props.count
            }
        </div>
    )
}
