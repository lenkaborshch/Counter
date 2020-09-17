import React from 'react';

type ButtonPropsType = {
    reset: () => void
    counter: number
}

function Button2(props: ButtonPropsType) {

    return (
        <span>
            <button disabled={props.counter === 0} onClick={props.reset}>reset</button>
        </span>
    )
}

export default Button2;
