import { Link } from 'react-router-dom'
import { Main, Title, Wrapper } from './styled'

function About() {
  return (
    <Main>
        <Wrapper>
            <Title>About Page</Title>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, tenetur.</p>
        
            <Link to={"../"}>Back</Link>
        </Wrapper>
    </Main>
  )
}

export default About