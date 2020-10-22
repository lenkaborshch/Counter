import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from './components/Counter/Counter';
import CounterSettings from "./components/CounterSettings/CounterSettings";

/*
type StateType = {
    startValue: number
    maxValue: number
    counter: number
    disabledBtnSet: boolean
    disabledBtnInc: boolean
    disabledBtnReset: boolean
}

type ActionsType =

const reducer = (state: StateType, action) => {

}
*/

function App() {
    console.log('App rendering')

    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(5)
    const [counter, setCounter] = useState<number>(startValue)

    useEffect(() => {
        const localStartValue = localStorage.getItem('startValue')
        const localMaxValue = localStorage.getItem('maxValue')
        if (localStartValue) setStartValue(JSON.parse(localStartValue))
        if (localMaxValue) setMaxValue(JSON.parse(localMaxValue))
    }, [])

    useEffect(() => {
        localStorage.setItem('startValue', JSON.stringify(startValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    })

    const changeStartValue = (value: number) => {
        setStartValue(value)
    }

    const changeMaxValue = (value: number) => {
        setMaxValue(value)
    }

    const changeValuesForCounter = () => {
        setStartValue(startValue)
        setMaxValue(maxValue)
        setCounter(startValue)
    }

    return (
        <div className="App-header">
            <Counter maxValue={maxValue} startValue={startValue} counter={counter} setCounter={setCounter}/>

            <CounterSettings maxValue={maxValue} startValue={startValue}
                             disabled={startValue < 0 || startValue >= maxValue}
                             changeStartValue={changeStartValue} changeMaxValue={changeMaxValue}
                             changeValuesForCounter={changeValuesForCounter}/>
        </div>
    );
}

export default App
