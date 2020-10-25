import React from 'react'
import {Button} from '../Button/Button'
import style from './CounterSettings.module.css'
import {DisplaySettings} from './DisplaySettings/DisplaySettings'

type SettingsCounterPropsType = {
    startValue: number
    maxValue: number
    changeStartValue: (startValue: number) => void
    changeMaxValue: (maxValue: number) => void
    disabled: boolean
    onButtonSetClick: () => void
}

export function CounterSettings(props: SettingsCounterPropsType) {

    return (
        <div className={style.settingsWrapper}>
            <div className={style.displaySettings}>
                <DisplaySettings maxValue={props.maxValue} startValue={props.startValue}
                                 changeStartValue={props.changeStartValue} changeMaxValue={props.changeMaxValue}/>
            </div>

            <div className={style.buttonsField}>
                <Button onClick={props.onButtonSetClick} title='set' startValue={props.startValue}
                        maxValue={props.maxValue} disabled={props.disabled}/>
            </div>
        </div>
    )
}