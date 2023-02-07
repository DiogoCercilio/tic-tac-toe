import { useState, useEffect } from 'react'
import { GAME_STATUS, IGameStatusObject } from '../models/IGame';
import Board from './Board';
import LeaderBoard from './LeaderBoard';
import Main from './styled/Main';
import Title from './styled/Title';
import Wrapper from './styled/Wrapper';
import Winner from './Winner';

/**
 * The Game Page. The user can see different page status here:
 * - Playing: The layout when user is playing
 * - Winner: The layout when user wins a game
 * - Draw: The layout when a game finishies drawned
 */
function Game() {
    const [winner, setWinner] = useState<string>("");
    const [gameStatus, setGameStatus] = useState<string>(GAME_STATUS.PLAYING);
    const [leaderBoard, setLeaderBoard] = useState<string[]>(getCached());

    useEffect(()=> {
        localStorage.setItem('leaderboard', JSON.stringify(leaderBoard))
    }, [leaderBoard])

    function getCached() {
        const cached = localStorage.getItem('leaderboard')
        return cached ? JSON.parse(cached) : []
    }    

    const onWinnerHandler = (data: string) => update({ status: GAME_STATUS.WINNER, data })
    const onDrawHandler = ()=> update({ status: GAME_STATUS.DRAW, data: {} })
    const onResetHandler = ()=> {
        setLeaderBoard([])
    }
        
    /**
     * Update the Screen based on the page state
     * @param { status, data }: IGameStatusObject - Status (GAME_STATUS), data (Any data (Optional))
     */
    const update = ({ status, data }: IGameStatusObject) => {
        setGameStatus(status)

        if (!data) return

        // I've choosen to use a switch here considering other features in the future...
        switch (status) {
            case GAME_STATUS.WINNER:
                setWinner(data)
                setLeaderBoard([...leaderBoard, data])
            break;
        }
    }

    /**
     * Restart the Game
     */
    const restart = ()=> update({ status: GAME_STATUS.PLAYING, data: {} })

    return (
        <Main>
            <LeaderBoard data={leaderBoard} onReset={onResetHandler} />
            <Wrapper>
                <Title>Reactic-Tac-Toe</Title>
                {gameStatus === GAME_STATUS.PLAYING && <Board onWinner={onWinnerHandler} onDraw={onDrawHandler} />}
                {gameStatus === GAME_STATUS.WINNER && <Winner name={winner} restartHandler={() => restart()} />}
                {gameStatus === GAME_STATUS.DRAW && <Winner isDraw={true} name={winner} restartHandler={() => restart()} />}
            </Wrapper>
        </Main>
    )
}

export default Game