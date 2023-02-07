import { MouseEventHandler } from "react"
import { Slot } from "./styled"

export interface IGameSlot {
  onClick: MouseEventHandler<HTMLDivElement>
  value: string
  currentPlayer: string
}

/**
 * This Component Represents a slot inside the Board
 */
function GameSlot({ onClick, value, currentPlayer }: IGameSlot) {
  return (
    <Slot className="slot" onClick={onClick} data-type={value || currentPlayer}>
        {value}
    </Slot>
  )
}

export default GameSlot