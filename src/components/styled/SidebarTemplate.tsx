import styled from "styled-components"

const SidebarTemplate = styled.aside`
    width: 320px;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;

    ul {
        margin: 20px 0;
        padding: 0;

        li {
            list-style: none;
            padding: 0;

            a {
                color: var(--blue);
                text-decoration: none;
            }
        }
    }

`

export default SidebarTemplate 