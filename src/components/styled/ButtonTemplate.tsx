import styled from "styled-components"

const ButtonTemplate = styled.button`
    background-color: var(--blue);
    color: #000;
    border: none;
    font-size: 18px;
    padding: 10px;
    transition: .3s background-color ease, .2s color ease;
    cursor: pointer;
    display: flex;
    text-align: center;
    justify-content: center;

    &:hover {
        background-color: #fff;
        color: #000;
    }
`

export default ButtonTemplate