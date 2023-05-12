import { styled } from "styled-components";

export const StyledStats = styled.section`
    
    .container {
        h1 {
            margin-left: 1rem;
        }
        .stats-section-header {
            margin-top: 1rem;
            padding: .25rem;
            background: ${({theme}) => theme.colors.bgSecondary};
            border-top: 1px solid ${({theme}) => theme.colors.border};
            border-bottom: 1px solid ${({theme}) => theme.colors.border};
            font-size: 1rem;
            font-weight: 400;
            text-transform: uppercase;
            color: ${({theme}) => theme.colors.textSecondary};
        }

        .stats-info {
            .stats-info-stats {
                padding-left: 1rem;
                list-style: none;

                .stat {
                    border-bottom: 1px solid ${({theme}) => theme.colors.border};
                    padding: .5rem;
                    padding-left: 0;
                    display: flex;
                    justify-content: space-between;

                    .stat-value {
                        color: ${({theme}) => theme.colors.textSecondary};
                    }
                }
            }
        }

        .stats-reviews {
            .reviews-days {
                display: flex;
                justify-content: space-evenly;
                align-items: flex-end;
                height: 7rem;

                .day {
                    width: 16%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;

                    .day-review {
                        font-size: .8rem;
                        color: ${({theme}) => theme.colors.textSecondary};
                        margin-bottom: .15rem;
                    }

                    .day-bar {
                        height: .25rem;
                        width: 100%;
                        border-radius: .25rem;
                        background: ${({theme}) => theme.colors.active};
                        margin-bottom: .25rem;
                    }

                    .day-name {
                        font-size: .9rem;
                        color: ${({theme}) => theme.colors.textSecondary};
                        margin-bottom: .25rem;
                    }
                }
            }
        }

        .calendar {
            border: 1px solid black;
            height: 14rem;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
    }
`;