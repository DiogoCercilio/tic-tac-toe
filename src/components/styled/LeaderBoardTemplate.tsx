import styled from "styled-components"

const LeaderBoardTemplate = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    background-color: #fff;
    padding: 10px;
    min-width: 160px;
    box-shadow: 2px 2px 5px 1px #c9c9c9;
    border-radius: 0 0 0 10px;
    background: #e9f5ff;
    text-align: center;
    
    h3 {
        color: var(--purple);
    }

    ul {
        margin: 0;
        padding: 0;

        li {
            list-style: none;
            color: #555;
        }
    }
`

export default LeaderBoardTemplate