import React from 'react';
import Display from '../Display/Display';
import Button from '../Button/Button';
import './Counter.css';

type CounterPropsType = {
    startValue: number
    maxValue: number
    counter: number
    setCounter: (value: number) => void
}

function Counter(props: CounterPropsType) {

    const increment = () => {
        if (props.counter < props.maxValue) {
            props.setCounter(props.counter + 1);
        }
    }

    const reset = () => {
        props.setCounter(props.startValue);
    }

    return (
        <div className='counterWrapper'>
            <div className='display'>
                <Display counter={props.counter} maxValue={props.maxValue}/>
            </div>
            <div className='buttons'>
                <Button disabled={props.counter === props.maxValue} onClick={increment}
                        title='inc' maxValue={props.maxValue} startValue={props.startValue}/>
                <Button disabled={props.counter === props.startValue} onClick={reset}
                        title='reset' maxValue={props.maxValue} startValue={props.startValue}/>
            </div>
        </div>
    );
}

export default Counter;
