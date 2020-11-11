import React from "react"
import { Link } from "gatsby"
import ThemeChanger from "../components/themeChanger"

export default (props) => (
  <nav className="navigation">

    <Link to="/contact">Contact</Link>
    <Link to="/404">404</Link>
    <a href='https://www.youtube.com/channel/UCXOgTJOW1n-PwPuRmOM8U6A?sub_confirmation=1' >Subscribe &rarr;</a>
    <Link to="/contact">Contact</Link>

    <div class="dropdown" >
      <i className="gg-menu-right-alt dropbtn"></i>
      <div class="dropdown-content">
        <Link to="/contact">Contact</Link>
        <Link to="/404">404</Link>
        <a href='https://www.youtube.com/channel/UCXOgTJOW1n-PwPuRmOM8U6A?sub_confirmation=1' >Subscribe &rarr;</a>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
    <ThemeChanger />
  </nav>
)



