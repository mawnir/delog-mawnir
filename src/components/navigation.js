import React from "react"
import { Link } from "gatsby"
import ThemeChanger from "../components/themeChanger"
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const Navog = props => {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    
    <nav className="navigation">

    <Link to="/contact">Contact</Link>
    <Link to="/404">404</Link>
    <a href='https://www.youtube.com/channel/UCXOgTJOW1n-PwPuRmOM8U6A?sub_confirmation=1' >Subscribe &rarr;</a>
    <Link to="/contact">Contact</Link>

    <div class="drodown" >
      <i className="gg-menu-right-alt dropbtn" onClick={handleClick}></i>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem >
            <Link to="/contact">Contact</Link>
        </MenuItem>
        <MenuItem >
            <a href='https://www.youtube.com/channel/UCXOgTJOW1n-PwPuRmOM8U6A?sub_confirmation=1' >Subscribe &rarr;</a>
        </MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>

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
}

export default Navog


