import React, {useEffect, useState} from 'react'
import './App.css'
import {Counter} from './components/Counter/Counter'
import {CounterSettings} from './components/CounterSettings/CounterSettings'

export function App() {

    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(5)
    const [counter, setCounter] = useState<number>(startValue)
    const [disabledBtnSet, setDisabledBtnSet] = useState<boolean>(true)
    const [disabledBtnsCounter, setdDisabledBtnsCounter] = useState<boolean>(false)
    const [isDataEntered, setIsDataEntered] = useState<boolean>(true)

    useEffect(() => {
        const localStartValue = localStorage.getItem('startValue')
        const localMaxValue = localStorage.getItem('maxValue')
        if (localStartValue) {
            setStartValue(JSON.parse(localStartValue))
            setCounter(JSON.parse(localStartValue))
        }
        if (localMaxValue) setMaxValue(JSON.parse(localMaxValue))
    }, [])

    const changeStartValue = (value: number) => {
        setStartValue(value)
        value < 0 || value >= maxValue ? setDisabledBtnSet(true) : setDisabledBtnSet(false)
        setdDisabledBtnsCounter(true)
        setIsDataEntered(false)
    }

    const changeMaxValue = (value: number) => {
        setMaxValue(value)
        startValue < 0 || startValue >= value ? setDisabledBtnSet(true) : setDisabledBtnSet(false)
        setdDisabledBtnsCounter(true)
        setIsDataEntered(false)
    }

    const onButtonSetClick = () => {
        setStartValue(startValue)
        setMaxValue(maxValue)
        setCounter(startValue)
        setDisabledBtnSet(true)
        localStorage.setItem('startValue', JSON.stringify(startValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        setdDisabledBtnsCounter(false)
        setIsDataEntered(true)
    }

    return (
        <div className='appHeader'>
            <div className='screen'>
                <Counter maxValue={maxValue} startValue={startValue}
                         counter={counter} setCounter={setCounter}
                         disabled={disabledBtnsCounter} isDataEntered={isDataEntered}/>
            </div>

            <div className='screen'>
                <CounterSettings maxValue={maxValue} startValue={startValue}
                                 disabled={disabledBtnSet}
                                 changeStartValue={changeStartValue} changeMaxValue={changeMaxValue}
                                 onButtonSetClick={onButtonSetClick}/>
            </div>

        </div>
    )
}