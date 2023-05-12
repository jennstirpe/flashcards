import { StyledCreate } from "./styled/Create.styled"

export default function Create({ closeCreate }) {
  return (
    <StyledCreate>
        <div className="create-backdrop">
            <div className="action-btns container">
                <button className="action-btn">New Deck</button>
                <button className="action-btn">Import Deck</button>
                <button className="action-btn">New Card</button>
                <button className="action-btn" onClick={() => closeCreate()}>Cancel</button>
            </div>
        </div>
    </StyledCreate>
  )
}
