import React from "react"
import { Link } from "gatsby"
import ThemeChanger from "../components/themeChanger"
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

UIkit.use(Icons);
export default (props) => (
  <nav className="navigation">

    <Link to="/contact">Contact</Link>
    <Link to="/404">404</Link>
    <a href='https://www.youtube.com/channel/UCXOgTJOW1n-PwPuRmOM8U6A?sub_confirmation=1' >Subscribe &rarr;</a>
    <Link to="/contact">Contact</Link>


    <div class="uk-inline ">
      <i className="gg-menu-right-alt uk-icon-link"  ></i>
      <div uk-dropdown="mode: click; pos: bottom-center" class="uk-background-muted">
        <ul className="uk-nav uk-dropdown-nav">
          <li class="uk-active"> <Link to="/contact">Contact</Link> </li>
          <li > <Link to="/404"> <span class="uk-margin-small-right" uk-icon="icon: thumbnails"></span> 404</Link> </li>
          <li class="uk-nav-divider"></li>
          <li > <a href='https://www.youtube.com/channel/UCXOgTJOW1n-PwPuRmOM8U6A?sub_confirmation=1' >Subscribe &rarr;</a> </li>
        </ul>
      </div>
    </div>


    <ThemeChanger />
  </nav>
)



