import React, {useEffect, useState} from 'react'
import {Button} from '../Button/Button'
import style from './CounterWithOneScreen.module.css'
import '../../App.css'
import {Display} from '../Counter/Display/Display'
import {DisplaySettings} from '../CounterSettings/DisplaySettings/DisplaySettings'

export function CounterWithOneScreen() {

    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(5)
    const [counter, setCounter] = useState<number>(startValue)
    const [disabledBtnSet, setDisabledBtnSet] = useState<boolean>(false)
    const [disabledBtnsCounter, setdDisabledBtnsCounter] = useState<boolean>(false)
    const [isDataEntered, setIsDataEntered] = useState<boolean>(true)
    const [showCounterScreen, setShowCounterScreen] = useState<boolean>(true)

    useEffect(() => {
        const localStartValue = localStorage.getItem('startValueInCounterWithOneScreen')
        const localMaxValue = localStorage.getItem('maxValueInCounterWithOneScreen')
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
        localStorage.setItem('startValueInCounterWithOneScreen', JSON.stringify(startValue))
        localStorage.setItem('maxValueInCounterWithOneScreen', JSON.stringify(maxValue))
        setdDisabledBtnsCounter(false)
        setIsDataEntered(true)
        setShowCounterScreen(!showCounterScreen)
    }

    const increment = () => {
        if (counter < maxValue) {
            setCounter(counter + 1)
        }
    }

    const reset = () => {
        setCounter(startValue)
    }

    return (
        <div className={style.screenWrapper}>
            {
                showCounterScreen
                    ? <>
                        <div className={style.display}>
                            <Display counter={counter} isDataEntered={isDataEntered}
                                     startValue={startValue} maxValue={maxValue}/>
                        </div>
                        <div className={style.buttonsField}>
                            <Button disabled={counter === maxValue || disabledBtnsCounter} onClick={increment}
                                    title='inc' maxValue={maxValue} startValue={startValue}/>
                            <Button disabled={counter === startValue || disabledBtnsCounter} onClick={reset}
                                    title='reset' maxValue={maxValue} startValue={startValue}/>
                            <Button onClick={onButtonSetClick} startValue={startValue}
                                    title='set' maxValue={maxValue} disabled={disabledBtnSet}/>
                        </div>
                    </>
                    : <>
                        <div className={style.display}>
                            <DisplaySettings maxValue={maxValue} startValue={startValue}
                                             changeStartValue={changeStartValue} changeMaxValue={changeMaxValue}/>
                        </div>
                        <div className={style.buttonsField}>
                            <Button onClick={onButtonSetClick} startValue={startValue}
                                    title='set' maxValue={maxValue} disabled={disabledBtnSet}/>
                        </div>
                    </>
            }
        </div>
    )
}