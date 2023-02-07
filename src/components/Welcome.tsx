import { Link } from "react-router-dom"
import Sidebar from "./Sidebar";
import { Main, Wrapper, Title } from "./styled";

/**
 * The First Screen the user sees
 */
function Welcome() {
  return (
    <Main>
        <Wrapper>
          <Sidebar />
          <Title>Reactic-Tac-Toe <br/>😎</Title>
          <Link style={linkStyle} to={"/game"}>Start Game</Link>
        </Wrapper>
    </Main>
  )
}

const linkStyle = {
  backgroundColor: "var(--blue)",
  color: "#000",
  border: "none",
  fontSize: "18px",
  padding: "10px",
  transition: ".3s background-color ease, .2s color ease",
  cursor: "pointer",
  textDecoration: "none",
  width: "100%",
  display: "flex",
  justifyContent: "center"
};

export default Welcome