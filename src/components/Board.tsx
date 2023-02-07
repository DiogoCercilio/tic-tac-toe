import { useState } from 'react'
import { GAME_COMMAND, IBoard } from '../models/IGame';
import { NUM_SLOTS, WIN_MAP } from '../util/constants'
import GameSlot from './GameSlot'
import { Section, Info, BoardGame } from './styled';

/**
 * 
 * @param param0 The Game Board (Container for the Game)
 */
function Board({ onWinner, onDraw }: IBoard) {
    const [choices, setChoices] = useState(Array(9).fill(null))
    const [isX, setIsX] = useState(true);
    const getPlayer = () => isX ? GAME_COMMAND.X : GAME_COMMAND.O

    /**
     * Called when the user click on a square
     */
    const clickHandler = (index: number) => {
        if (choices[index]) return
        addChoice(index)
        setIsX(!isX)

        if(isDrawGame()) onDraw()
        if(hasWinner()) onWinner(getPlayer())
    }

    /**
     * Check if is a Drawn Game
     */
    const isDrawGame = ()=> {
        return choices.filter(choice=> !!choice).length === NUM_SLOTS.length
    }

    /**
     * Check if the game has a Winner already (TODO: With more time, I would join both `isDrawGame` and `hasWinner` logics)
     */
    const hasWinner = () => {
        for (let index = 0; index < WIN_MAP.length; index++) {
            if (matchWin(WIN_MAP[index])) return true
        }
    }

    /**
     * Do the comparision to check if all choices are equal
     */
    const matchWin = ([a, b, c]: number[]) =>
        choices[a] && (choices[a] === choices[b] && choices[b] === choices[c])

    /**
     * Update the state when adding a Choice
     */
    const addChoice = (index: number) => {
        choices[index] = getPlayer()
        setChoices(choices)
    }

    return (
        <Section>
            <Info>"{getPlayer()}" plays now...</Info>
            <BoardGame data-cy="board-game">
                {NUM_SLOTS.map((n: number) =>
                    <GameSlot data-cy="board-game-slot"
                        key={n} 
                        onClick={() => clickHandler(n)} 
                        value={choices[n]} 
                        currentPlayer={getPlayer()}
                    />)}
            </BoardGame>
        </Section>
    )
}

export default Board