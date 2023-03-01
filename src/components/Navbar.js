import React from 'react'
import { Link } from 'react-router-dom';
import classes from './Navbar.module.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.left}>
      <span className={classes.item}>USDT<KeyboardArrowDownIcon/></span>
        <span className={classes.item}>Men</span>
        <span className={classes.item}>Women</span>
        <span className={classes.item}>Children</span>
      </div>
      <div className={classes.middle}><Link className={classes.links} to='/'>ROUTESTORE</Link></div>
      <div className={classes.right}>
      <div className={classes.item}><Link className={classes.links} to="/">Home</Link></div>
      <div className={classes.item}><Link className={classes.links} to='/'>About</Link></div>
      <div className={classes.item}><Link className={classes.links} to='/'>Contact</Link></div>
      <div className={classes.item}><Link className={classes.links} to='/'>Stores</Link></div>
      
      <div className={classes.icons}>
      <SearchIcon/>
      <PermIdentityIcon/>
      <FavoriteBorderIcon/>
      <div className={classes.cartIcon}><ShoppingCartIcon/><span className={classes.cartValue}>0</span></div>
      </div>

      </div>
      
    </div>
  )
}

export default Navbar