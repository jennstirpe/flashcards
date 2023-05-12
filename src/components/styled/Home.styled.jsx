import { styled } from "styled-components";

export const StyledHome = styled.section`
  
    .container {

        .home-header {
            border-bottom: 3px solid ${({theme}) => theme.colors.border}; 
            margin: 0 auto;
            padding: 1rem;

            .home-header-search {
                padding: .5rem 0;
                position: relative;
                text-align: center;

                .search-icon {
                    position: absolute;
                    top: .75rem;
                    left: 8%;
                }

                .search-input {
                    width: 85%;
                    height: 2rem;
                    padding: .5rem .5rem .5rem 2.5rem;
                    background: ${({theme}) => theme.colors.border};
                    border: none;
                    border-radius: .5rem;
                    
                    &::placeholder {
                        font-weight: 300;
                        letter-spacing: .75px;
                    }
                }
            }
        }

        .no-stacks {
            text-align: center;
            margin-top: 2rem;
            font-weight: 300;
            font-size: .75rem;

            .new-deck-btn {
                border: none;
                padding: .75rem;
                background: none;
                margin-top: 1rem;
                color: ${({theme}) => theme.colors.active};
                font-weight: 300;
            }
        }

        .stacks {

            .stacks-label {
                color: ${({theme}) => theme.colors.accent};
                display: flex;
                align-items: center;
                justify-content: flex-end;
                padding: .5rem;
                border-bottom: 2px solid ${({theme}) => theme.colors.border};

                svg {
                    margin-right: .3rem;
                }
            }

            .stack {
                border-bottom: 1px solid ${({theme}) => theme.colors.border};
                padding: .5rem;
                position: relative;

                .stack-name {
                    font-weight: 400;
                    margin-bottom: .25rem;
                }

                .stack-details {
                    display: flex;
                    justify-content: space-between;
                    width: 9.5rem;

                    .stack-card-count, .stack-last-edit {
                        display: flex;
                        align-items: center;
                        color: ${({theme}) => theme.colors.textSecondary};

                        svg {
                            margin-right: .25rem;
                            stroke: ${({theme}) => theme.colors.textSecondary};
                        }
                    }
                }

                .stack-grade {
                    position: absolute;
                    top: .65rem;
                    right: .65rem;
                    display: flex;
                    align-items: center;
                    color: ${({theme}) => theme.colors.accent};

                    .grade {
                        font-weight: 200;
                    }
                    svg {
                        stroke: ${({theme}) => theme.colors.textSecondary};
                    }
                } 
            }
        }
    }
`;