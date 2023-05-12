import { StyledStats } from "./styled/Stats.styled"

export default function Stats() {
  return (
    <StyledStats>
        <div className="container">
            <h1>Stats</h1>

            <div className="stats-info">
                <h2 className="stats-section-header">Info</h2>
                <ul className="stats-info-stats">
                    <li className="stat">
                        <p className="stat-name">Reviews Today</p>
                        <span className="stat-value">0/10</span>
                    </li>
                    <li className="stat">
                        <p className="stat-name">Reviews per Day (Average)</p>
                        <span className="stat-value">1</span>
                    </li>
                    <li className="stat">
                        <p className="stat-name">Total Number of Reviews</p>
                        <span className="stat-value">10</span>
                    </li>
                    <li className="stat">
                        <p className="stat-name">Streak (Days)</p>
                        <span className="stat-value">2</span>
                    </li>
                </ul>
            </div>
            <div className="stats-reviews">
                <h2 className="stats-section-header">Reviews</h2>
                <ul className="reviews-days">
                    <li className="day">
                        <span className="day-review">0</span>
                        <div className="day-bar"></div>
                        <span className="day-name">Sat</span>
                    </li>
                    <li className="day">
                        <span className="day-review">1</span>
                        <div className="day-bar"></div>
                        <span className="day-name">Sun</span>
                    </li>
                    <li className="day">
                        <span className="day-review">4</span>
                        <div className="day-bar"></div>
                        <span className="day-name">Mon</span>
                    </li>
                    <li className="day">
                        <span className="day-review">2</span>
                        <div className="day-bar"></div>
                        <span className="day-name">Tue</span>
                    </li>
                    <li className="day">
                        <span className="day-review">2</span>
                        <div className="day-bar"></div>
                        <span className="day-name">Wed</span>
                    </li>
                    <li className="day">
                        <span className="day-review">0</span>
                        <div className="day-bar"></div>
                        <span className="day-name">Today</span>
                    </li>
                </ul>

                <div className="calendar">
                    Calendar
                </div>
            </div>
        </div>
    </StyledStats>
  )
}
