import { StyledSearch } from "./styled/Search.styled"

export default function Search() {
  return (
    <StyledSearch>
        <div className="container">
            <h1>Search</h1>

            <div className="search-bar">
                <div className="search-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#828282" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></div>
                <input className="search-input" type="text"  placeholder="Your Stacks and Cards" />
            </div>

            <div className="search-options">
                <p className="option">Enter a search query, to search your stacks and cards.</p>
                <p className="option">-or-</p>
                <button className="browse">Browse Public Decks</button>
            </div>
        </div>
    </StyledSearch>
  )
}
