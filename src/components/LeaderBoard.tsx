import { GAME_COMMAND } from '../models/IGame'
import { ILeaderBoard } from '../models/ILeaderBoard'
import Button from './Button'
import { LeaderBoardTemplate } from './styled'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import './LeaderBoard.css'

/**
 * All Logic related to the Leaderboard
 */
function LeaderBoard({ data, onReset }: ILeaderBoard) {
    /**
     * Count the previous wins for each user ("X" and "O")
     */
    const countByLabel = (label: string)=> {
        return data.filter((item: string) => item === label).length
    }

    ChartJS.register(ArcElement, Tooltip, Legend);

    return (
        <LeaderBoardTemplate>
            <h3>Leaderboard:</h3>
            <ul>
                <li><strong>{GAME_COMMAND.X}:</strong> {countByLabel(GAME_COMMAND.X)}</li>
                <li><strong>{GAME_COMMAND.O}:</strong> {countByLabel(GAME_COMMAND.O)}</li>
            </ul>

            <div className="wins-chart">
                <Doughnut width={200} data={{
                    labels: ['X', 'O'],
                    datasets: [{
                        label: '# of wins',
                        data: [countByLabel(GAME_COMMAND.X), countByLabel(GAME_COMMAND.O)],
                        backgroundColor: [
                            '#e389e7',
                            '#2196f3'
                        ],                        
                        borderWidth: 1
                    }],
                }}
                />
                            </div>

            <Button onClickHandler={()=> onReset()} value="Reset Leaderboard"/>
        </LeaderBoardTemplate>
    )
}

export default LeaderBoard