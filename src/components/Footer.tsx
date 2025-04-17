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
                    <img src={languageIcon} />
                    <span className={`${classes.languageChangeItem} ${activeLanguage === 'Рус' ? classes.active : ''
                        }`} onClick={e => handleLanguageChange('Рус')}>Рус</span>

                    <span className={`${classes.languageChangeItem} ${activeLanguage === 'Eng' ? classes.active : ''
                        }`} onClick={e => handleLanguageChange('Eng')}>Eng</span>
                </li>
            </ul>
            <div className={classes.sochialArea}>
                <a href="https://vk.com/" target='_blank'><img src={vkIcon}/></a>
                <a href="https://t.me/" target='_blank'><img src={telegramIcon}/></a>
                <a href="https://whatsapp.com" target='_blank'><img src={whatsappIcon}/></a>
            </div>
        </div>
    )
}
export default Footer;