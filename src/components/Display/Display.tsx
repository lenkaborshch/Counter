import React from 'react';

type DisplayPropsType = {
    counter: number
}

function Display(props: DisplayPropsType) {
    let displayStyle = {
        color: props.counter < 5 ? 'black' : 'red',
    }

    return (
        <div style={displayStyle}>
            {props.counter}
        </div>
    )
}

export default Display;
