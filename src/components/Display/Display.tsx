import React from 'react';

type DisplayPropsType = {
    counter: number
    maxValue: number
}

function Display(props: DisplayPropsType) {
    let displayStyle = {
        color: props.counter < props.maxValue ? 'black' : 'red',
    }

    return (
        <div style={displayStyle}>
            {props.counter}
        </div>
    )
}

export default Display;
