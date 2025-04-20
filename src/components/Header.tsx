import React from 'react';
import classes from "./Header.module.css";
import wishlist_logo from "../public/assets/wichlist-vector.svg"
import cart_logo from "../public/assets/cart-vector.svg"
import { Link } from 'react-router-dom';


const Header = (props: any) => {
    return (
        <div className={classes.headerArea}>
            <Link to="/" className={classes.logobutton}>
            <span className={classes.headerLogo}>QPICK</span>
            </Link>
            <ul className={classes.headerMenu}>
                <li>
                <Link to="/" className={classes.navbutton}>
                    <div className={classes.imgContainer}>
                        <img src={wishlist_logo} alt="избранное" />
                        <div className={classes.circle}>2</div>
                    </div>
                    </Link>
                </li>
                <li>
                    <Link to="/cart" className={classes.navbutton}>
                        <div className={classes.imgContainer}>
                            <img src={cart_logo} alt="корзина" />
                            <div className={classes.circle}>{props.cartCounter}</div>
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
    )
}
export default Header;