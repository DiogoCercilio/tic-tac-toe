import { IButton } from "../models/IButton"
import ButtonTemplate from "./styled/ButtonTemplate"

/**
 * A simple abstraction for the Button Component. In a real scenario this component could 
 * have multiples functions.
 */
function Button({ value, width, onClickHandler }: IButton) {
  return (
    <ButtonTemplate 
      style={{width}}
      onClick={onClickHandler}
    >
        {value}
    </ButtonTemplate>
  )
}

export default Button