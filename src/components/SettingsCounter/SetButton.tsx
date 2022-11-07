import React from 'react';
import s from './SetButton.module.css';
import { Button } from '../Button';

type SetButtonPropstype = {
    count: number,
    message: string,
    error: string,
    setStartValue: () => void,
}

export function SetButton(props: SetButtonPropstype) {

    return (
        <div className={s.setButton}>
            <Button
                name={'set'}
                className={s.button}
                callback={props.setStartValue}
                disabled={!props.message || props.error ? true : false}
            />
        </div>
    );
}