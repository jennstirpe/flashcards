import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        position: relative;
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: ${({theme}) => theme.colors.bgMain};
        color: ${({theme}) => theme.colors.textMain};
        font-family: 'Open Sans', sans-serif;
        // font-weight: 300, 400, 600
        padding-top: 5rem;

        .themeToggle {
            position: absolute;
            left: .25rem;
            top: .25rem;
            border: 1px solid black;

            &:hover {
                cursor: pointer;
                background: #00000050;
            }
        }

        button {
            &:hover {
                cursor: pointer;
            }
        }
    }
`;

export default GlobalStyles;