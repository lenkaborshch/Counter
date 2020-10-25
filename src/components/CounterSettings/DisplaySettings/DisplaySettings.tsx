import React, {ChangeEvent} from 'react'
import style from './DisplaySettings.module.css'

type SettingsCounterPropsType = {
    startValue: number
    maxValue: number
    changeStartValue: (startValue: number) => void
    changeMaxValue: (maxValue: number) => void
}

export function DisplaySettings(props: SettingsCounterPropsType) {

    const inputStartValueClass = ` ${style.input} ${props.startValue < 0 || props.startValue >= props.maxValue ? style.error : ''} `
    const inputMaxValueClass = ` ${style.input} ${props.maxValue <= props.startValue ? style.error : ''} `

    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeStartValue(Number(e.target.value))
    }
    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeMaxValue(Number(e.target.value))
    }

    return (
        <>
            <div>
                Start value: <input className={inputStartValueClass}
                                    type='number' value={props.startValue}
                                    onChange={onChangeStartValue}/>
            </div>
            <div>
                Max value: <input
                className={inputMaxValueClass}
                type='number' value={props.maxValue}
                onChange={onChangeMaxValue}/>
            </div>
        </>
    )
}