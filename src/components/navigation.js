import React from "react"
import { Link } from "gatsby"
import ThemeChanger from "../components/themeChanger"

export default (props) => (
  <nav className="navigation">
    <Link to="/contact">Contact</Link>
    <Link to="/404">404</Link>
    <a href='https://www.youtube.com/channel/UCXOgTJOW1n-PwPuRmOM8U6A?sub_confirmation=1' >Subscribe &rarr;</a>
    <Link to="/contact">Contact</Link>

    <div>

      <div class="uk-inline ">
      <span uk-icon="icon: menu; ratio: 1.3" class="uk-icon-link"></span>

        <div uk-dropdown="mode: click;" class="uk-background-muted">
          <ul className="uk-nav uk-dropdown-nav ">
            <li class="uk-active"> <Link to="/contact">Contact</Link> </li>
            <li > <Link to="/404"> <span class="uk-margin-small-right" uk-icon="icon: thumbnails"></span> 404</Link> </li>
            <li class="uk-nav-divider"></li>
            <li > <a href='https://www.youtube.com/channel/UCXOgTJOW1n-PwPuRmOM8U6A?sub_confirmation=1' >Subscribe &rarr;</a> </li>
          </ul>
        </div>
      </div>


    </div>

    <ThemeChanger />
  </nav>
)



