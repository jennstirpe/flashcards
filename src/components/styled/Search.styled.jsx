import { styled } from "styled-components";

export const StyledSearch = styled.section`
    
    .container {
        h1 {
            margin-left: 1rem;
        }

        .search-bar {
            padding: .5rem 0;
            position: relative;
            text-align: center;
            margin-bottom: 1.5rem;

            .search-icon {
                position: absolute;
                top: .75rem;
                left: 9%;
            }

            .search-input {
                width: 85%;
                height: 2rem;
                padding: .75rem .5rem .5rem 2.5rem;
                background: ${({theme}) => theme.colors.border};
                border: none;
                border-radius: .5rem;
                font-size: 1rem;
                    
                &::placeholder {
                    font-weight: 300;
                    font-size: 1rem;
                }
            }
        }

        .search-options {
            text-align: center;
            padding: 1rem;

            .option {
                margin: 1rem 0;
            }

            .browse {
                margin-top: 1rem;
                color: ${({theme}) => theme.colors.accent};
                background: none;
                border: none;
                font-size: 1.15rem;
            }

        }
    }
`;