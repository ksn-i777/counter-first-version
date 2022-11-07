import React from 'react';

type ButtonPropsType = {
    name: string,
    className: string,
    callback: () => void,
    disabled: boolean,
}

export function Button(props: ButtonPropsType) {
    return (
        <button className={props.className} onClick={props.callback} disabled={props.disabled}>{props.name}</button>
    )
}