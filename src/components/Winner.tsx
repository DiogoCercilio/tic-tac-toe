import { Link } from 'react-router-dom'
import { IWinner } from '../models/IWinner'
import Button from './Button'
import { Wrapper, Info } from './styled'
import './Winner.css'

/**
 * This Component appears when someone wins a challenge, or when is a draw Game
 */
function Winner({ name, restartHandler, isDraw }: IWinner) {
  return (
      <Wrapper data-cy="winner-section">
        {!isDraw ? <>
          <Info data-cy="winner-section-info">{name} wins!</Info>
          <p className="winner-animation">🥳 🎉</p>
        </> :
        <>
          <Info data-cy="winner-section-info">Draw Game</Info>
          <p className="winner-animation">😕</p>
        </>
        }
          <Button value="Play again" width={300} onClickHandler={()=> restartHandler()} />
          <Link style={linkStyle} to={"/"}>Go to Home</Link>
      </Wrapper>
  )
}

const linkStyle = {
  color: "var(--blue)",
  marginTop: 20,
  display: "flex",
  justifyContent: "center"
};

export default Winner