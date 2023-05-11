import { styled } from "styled-components";

export const StyledNavbar = styled.nav`
    border: 1px solid ${({theme}) => theme.colors.textSecondary}30;
    width: 100vw;
    max-width: 50rem;
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0  auto;
    background: ${({theme}) => theme.colors.bgSecondary};

    .container {
        display: flex;
        padding-bottom: 1.25rem;
        padding-top: .25rem;
        width: 100%;

        .nav-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            width:  20%;
            background: none;
            border: none;

            .nav-item-label {
                letter-spacing: 1px;
                font-size: .8rem;
                margin-top: .25rem;
                color: ${({theme}) => theme.colors.textSecondary};
            }
        }
    }

    @media (min-width: 768px) {
        top: 0;
        bottom: unset;
    }
`;