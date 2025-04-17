import React from 'react';
import classes from './Footer.module.css'

const Footer = function() {
   
    return(
        <div className = {classes.footerArea}>
            <span className={classes.footerLogo}>QPICK</span>
            <ul className={classes.footerMenu}>
                <li>Избранное</li>
                <li>Корзина</li>
                <li>Контакты</li>
            </ul>
            <ul className={classes.footerMenu}>
                <li>Условия сервиса</li>
                <li>
                    <span>Рус</span>
                    <span>Eng</span>
                </li>
            </ul>
            <div>Cowctnb</div>
        </div>
    )
}
export default Footer;