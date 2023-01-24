import React, {useState} from 'react';
import Logo from "../../elements/Logo/Logo";
import styles from './Navbar.module.scss'
import SocialIcons from "../../UI/SocialIcons/SocialIcons";
import classNames from "classnames";

const Navbar = (props) => {
    const [isActiveMenu, setIsActiveMenu] = useState(false);

    const menuHandler = () => {
        const body = document.body;
        body.classList.toggle('lock')
        setIsActiveMenu(!isActiveMenu);
    }

    return (
        <>
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

                    <SocialIcons class={styles['social-icons']}/>
                </div>

                <div className={classNames(styles['menu-btn'], isActiveMenu && styles.active)} onClick={menuHandler}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>

            <div className={classNames(styles['mobile-menu'], isActiveMenu && styles.visible)}>
                    <ul className={styles['mob-nav']}>
                        <li>
                            <a href="#about" onClick={menuHandler}>ABOUT</a>
                        </li>

                        <li>
                            <a href="#roadmap" onClick={menuHandler}>ROADMAP</a>
                        </li>

                        <li>
                            <a href="#team" onClick={menuHandler}>TEAM</a>
                        </li>

                        <li>
                            <a href="#faq" onClick={menuHandler}>FAQ</a>
                        </li>
                    </ul>

                <SocialIcons class={styles['social-icons-mn']}/>
            </div>
        </>
    );
}

export default Navbar;