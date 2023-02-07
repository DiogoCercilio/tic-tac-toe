import styled from "styled-components";

const Slot = styled.div`
    width: 100px;
    height: 100px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 7px 1px rgba(0,0,0,.1), 1px 1px 2px 1px rgba(200,200,200,.1);
    margin: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 32px;
    font-weight: 700;
    font-family: Fantasy, cursive!important;
    position: relative;
    cursor: pointer;

    &[data-type="X"] {
        color: var(--blue);
    }

    &[data-type="O"] {
        color: var(--purple);
    }    
`

export default Slot