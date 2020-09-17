import React from 'react';
import './Button.css';

type ButtonPropsType = {
    onClick: () => void
    counter: number
    title: string
    maxValue: number
    minValue: number
}

function Button(props: ButtonPropsType) {

    let disabledType = props.title === 'inc' ? props.counter === props.maxValue : props.counter === props.minValue;

    return (
        <span>
            <button className='button'
                    disabled={disabledType}
                    onClick={props.onClick}>{props.title}
            </button>
        </span>
    )
}

export default Button;