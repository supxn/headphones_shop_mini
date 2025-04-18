import React from 'react';
import classes from './Footer.module.css'
import languageIcon from "./media/language.svg"
import vkIcon from "./media/VK.svg"
import whatsappIcon from "./media/Whatsapp.svg"
import telegramIcon from "./media/Telegram.svg"

const Footer = function () {
    const [activeLanguage, setActiveLanguage] = React.useState('Рус');
    const handleLanguageChange = (lang: 'Рус' | 'Eng') => {
        setActiveLanguage(lang);
    };

    return (
        <div className={classes.footerArea}>
            <span className={classes.footerLogo}>QPICK</span>
            <ul className={classes.footerMenu}>
                <li className={classes.menuItem}>Избранное</li>
                <li className={classes.menuItem}>Корзина</li>
                <li className={classes.menuItem}>Контакты</li>
            </ul>
            <ul className={classes.footerMenu}>
                <li className={classes.menuItem}>Условия сервиса</li>
                <li className={classes.languageChange}>
                    <img src={languageIcon} alt='' />
                    <span className={`${classes.languageChangeItem} ${activeLanguage === 'Рус' ? classes.active : ''
                        }`} onClick={e => handleLanguageChange('Рус')}>Рус</span>

                    <span className={`${classes.languageChangeItem} ${activeLanguage === 'Eng' ? classes.active : ''
                        }`} onClick={e => handleLanguageChange('Eng')}>Eng</span>
                </li>
            </ul>
            <div className={classes.sochialArea}>
                <a href="https://vk.com/" ><img src={vkIcon} alt='vk'/></a>
                <a href="https://t.me/" ><img src={telegramIcon} alt='telegram'/></a>
                <a href="https://whatsapp.com" ><img src={whatsappIcon} alt = "whatsapp"/></a>
            </div>
        </div>
    )
}
export default Footer;