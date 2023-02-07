import { MouseEventHandler } from "react"

export interface IButton {
    value: string
    width?: number | string
    onClickHandler: MouseEventHandler<HTMLButtonElement>
}