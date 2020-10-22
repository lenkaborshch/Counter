import React from 'react';
import './Button.css';

type ButtonPropsType = {
    onClick: () => void
    title: 'inc' | 'reset' | 'set'
    maxValue: number
    startValue: number
    disabled: boolean
}

function Button(props: ButtonPropsType) {

    return (
        <span>
            <button className='button'
                    disabled={props.disabled}
                    onClick={props.onClick}>
                {props.title}
            </button>
        </span>
    )
}

export default Button;