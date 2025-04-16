import React, {useState} from 'react';
import styles from "./Header_styles.css";
import wishlist_logo from "./media/wichlist-vector.svg"
import cart_logo from "./media/cart-vector.svg"

const Header = function() {
   

   
    return(
        <div className = "header-area">
            <span className = "header-logo">QPICK</span>
            <ul className = "header-menu">
                <li><img src={wishlist_logo}/></li>
                <li><img src={cart_logo}/></li>
            </ul>
        </div>
    )
}
export default Header;