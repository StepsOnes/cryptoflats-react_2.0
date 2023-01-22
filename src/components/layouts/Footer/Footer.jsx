import React from 'react';
import styles from './Footer.module.scss'
import classNames from "classnames";
import Game from "../../elements/Game/Game";
import Faq from "../../elements/Faq/Faq";
import FooterAbout from "../../elements/FooterAbout/FooterAbout";

const Footer = (props) => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <Game />
                <Faq />
                <FooterAbout />
            </div>
        </footer>
    );
}

export default Footer;