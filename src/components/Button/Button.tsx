import React from 'react'
import style from './Button.module.css'

type ButtonPropsType = {
    onClick: () => void
    title: 'inc' | 'reset' | 'set'
    maxValue: number
    startValue: number
    disabled: boolean
}

export function Button(props: ButtonPropsType) {

    return (
        <span>
            <button className={style.button}
                    disabled={props.disabled}
                    onClick={props.onClick}>
                {props.title}
            </button>
        </span>
    )
}