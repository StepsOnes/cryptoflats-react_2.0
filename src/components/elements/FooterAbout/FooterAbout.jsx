import React from 'react';
import styles from './FooterAbout.module.scss';
import socialIcons from "../../UI/SocialIcons/SocialIcons";
import SocialIcons from "../../UI/SocialIcons/SocialIcons";

const FooterAbout = (props) => {
    return (
        <div className={styles['footer-about']}>
            <a href="/" className={styles.terms}>
                <span>TERMS &</span> CONDITIONS
            </a>

            <div className={styles.copyright}>
                <span>© 2022 Cryptoflats</span> All Rights Reserved
            </div>

            <SocialIcons class={styles['social-icons']}/>
        </div>
    );
}

export default FooterAbout;