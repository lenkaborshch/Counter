import React, {useState} from 'react';
import Display from './Display/Display';
import Button from './Button/Button';
//import Button2 from './Button2';
import './Counter.css';

function Counter() {
    const maxValue: number = 5;
    const minValue: number = 0;

    let [counter, setCounter] = useState<number>(minValue);

    const increment = () => {
        if (counter < 5) {
            setCounter(counter + 1);
        }
    }

    const reset = () => {
        setCounter(0);
    }

    return (
        <div className='counterWrapper'>
            <div className='display'>
                <Display counter={counter}/>
            </div>
            <div className='buttons'>
                <Button counter={counter} onClick={increment} title='inc' maxValue={maxValue} minValue={minValue}/>
                <Button counter={counter} onClick={reset} title='reset' maxValue={maxValue} minValue={minValue}/>
                {/*<Button2 counter={counter} reset={reset}/>*/}
            </div>
        </div>
    );
}

export default Counter;
