import React, {useState} from 'react';
import classes from "./Header.module.css";
import wishlist_logo from "./media/wichlist-vector.svg"
import cart_logo from "./media/cart-vector.svg"

const Header = function() {
   

   
    return(
        <div className={classes.headerArea}>
            <span className = {classes.headerLogo}>QPICK</span>
            <ul className = {classes.headerMenu}>
                <li><img src={wishlist_logo}/></li>
                <li><img src={cart_logo}/></li>
            </ul>
        </div>
    )
}
export default Header;