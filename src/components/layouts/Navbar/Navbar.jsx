import React from 'react';
import Logo from "../../elements/Logo/Logo";
import styles from './Navbar.module.scss'
import SocialIcons from "../../UI/SocialIcons/SocialIcons";

const Navbar = (props) => {
    return (
        // eslint-disable-next-line no-restricted-globals
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <Logo />

                <div className={styles.wrapper}>
                    <ul className={styles.menu}>
                        <li>
                            <a href="#about">ABOUT</a>
                        </li>

                        <li>
                            <a href="#roadmap">ROADMAP</a>
                        </li>

                        <li>
                            <a href="#team">TEAM</a>
                        </li>

                        <li>
                            <a href="#faq">FAQ</a>
                        </li>
                    </ul>

                    <SocialIcons />
                </div>
            </div>

        </nav>
    );
}

export default Navbar;