import React from 'react';
import Button from "../Button/Button";
import style from './CounterSettings.module.css'

type SettingsCounterPropsType = {
    startValue: number
    maxValue: number
    changeStartValue: (startValue: number) => void
    changeMaxValue: (maxValue: number) => void
    disabled: boolean
    changeValuesForCounter: () => void
}

function CounterSettings(props: SettingsCounterPropsType) {

    const inputStartValueClass = ` ${style.input} ${props.startValue < 0 || props.startValue === props.maxValue ? style.error : ''} `
    const inputMaxValueClass = ` ${style.input} ${props.maxValue <= props.startValue ? style.error : ''} `

    return (
        <div className={style.settingsWrapper}>
            <div className={style.displaySettings}>
                <div>
                    Start value: <input className={inputStartValueClass}
                                        type='number' value={props.startValue}
                                        onChange={(e) => props.changeStartValue(Number(e.target.value))}/>
                </div>
                <div>
                    Max value: <input
                    className={inputMaxValueClass}
                    type='number' value={props.maxValue}
                    onChange={(e) => {
                        props.changeMaxValue(Number(e.target.value))
                    }}/>
                </div>
            </div>
            <div className={style.button}>
                <Button onClick={props.changeValuesForCounter} title='set' startValue={props.startValue}
                        maxValue={props.maxValue} disabled={props.disabled}/>
            </div>
        </div>
    );
}


export default CounterSettings