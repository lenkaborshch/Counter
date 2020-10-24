import React from 'react'

type DisplayPropsType = {
    counter: number
    startValue: number
    maxValue: number
    isDataEntered: boolean
}

export function Display(props: DisplayPropsType) {

    const errorInEnteredData = props.startValue < 0 || props.startValue >= props.maxValue

    let displayStyle = {
        color: props.counter === props.maxValue || errorInEnteredData ? 'red' : 'black',
        fontSize: props.isDataEntered ? '50px' : '35px'
    }

    return (
        <div style={displayStyle}>
            {props.isDataEntered
                ? props.counter
                : errorInEnteredData ? 'Enter correct value' : 'Click set'}
        </div>
    )
}