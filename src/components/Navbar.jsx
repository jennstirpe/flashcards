import { useState } from "react"
import { StyledNavbar } from "./styled/Navbar.styled"

export default function Navbar({ switchView }) {
    const [ active, setActive ] = useState("home");

    function handleSwitchView(view) {
        switchView(view)
        setActive(view)
    }

  return (
    <StyledNavbar>
        <div className="container">
            <button onClick={() => handleSwitchView("home")} className={active === "home" ? "nav-item active" : "nav-item"}>
                <svg className="nav-item-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30px" height="30px"><path d="M 12 2 A 1 1 0 0 0 11.289062 2.296875 L 1.203125 11.097656 A 0.5 0.5 0 0 0 1 11.5 A 0.5 0.5 0 0 0 1.5 12 L 4 12 L 4 20 C 4 20.552 4.448 21 5 21 L 9 21 C 9.552 21 10 20.552 10 20 L 10 14 L 14 14 L 14 20 C 14 20.552 14.448 21 15 21 L 19 21 C 19.552 21 20 20.552 20 20 L 20 12 L 22.5 12 A 0.5 0.5 0 0 0 23 11.5 A 0.5 0.5 0 0 0 22.796875 11.097656 L 12.716797 2.3027344 A 1 1 0 0 0 12.710938 2.296875 A 1 1 0 0 0 12 2 z"/></svg>
                <span className="nav-item-label">Home</span>
            </button>
            <button onClick={() => handleSwitchView("stats")} className={active === "stats" ? "nav-item active" : "nav-item"}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#828282" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bar-chart-2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                <span className="nav-item-label">Stats</span>
            </button>
            <button onClick={() => handleSwitchView("create")} className={active === "create" ? "nav-item active" : "nav-item"}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                <span className="nav-item-label">Create</span>
            </button>
            <button onClick={() => handleSwitchView("search")} className={active === "search" ? "nav-item active" : "nav-item"}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                <span className="nav-item-label">Search</span>
            </button>
            <button onClick={() => handleSwitchView("profile")} className={active === "profile" ? "nav-item active" : "nav-item"}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                <span className="nav-item-label">Profile</span>
            </button>
        </div>
    </StyledNavbar>
  )
}
