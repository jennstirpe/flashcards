import { styled } from "styled-components";

export const StyledCreate = styled.section `
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
    background: #00000050;

    .action-btns {
        display: flex;
        flex-direction: column;
        width: 96%;
        margin: 0 auto;
        position: absolute;
        bottom: 1.75rem;
        left: 0;
        right: 0;

        .action-btn {
            padding: 1rem;
            color: ${({theme}) => theme.colors.accent};
            font-weight: 300;
            font-size: 1.25rem;
            letter-spacing: .75px;
            border: none;
            background: ${({theme}) => theme.colors.bgMain};
            margin-bottom: .05rem;

            &:first-of-type {
                border-top-left-radius: 1rem;
                border-top-right-radius: 1rem;
            }

            &:nth-of-type(3) {
                border-bottom-left-radius: 1rem;
                border-bottom-right-radius: 1rem;
            }

            &:last-of-type {
                border-radius: 1rem;
                margin-top: .5rem;
                background: ${({theme}) => theme.colors.bgSecondary};
                font-weight: 600;
            }
        }
    }

    @media (min-width: 768px) {
        .action-btns {
            flex-direction: column-reverse;
            top: 1.75rem;
            bottom: unset;

            .action-btn {

                &:nth-of-type(1) {
                    border-radius: 0;
                    border-bottom-left-radius: 1rem;
                    border-bottom-right-radius: 1rem;
                }

                &:nth-of-type(3) {
                    border-radius: 0;
                    border-top-left-radius: 1rem;
                    border-top-right-radius: 1rem;
                    margin-top: .5rem;
                }
            }
        }
    }
`;