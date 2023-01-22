import React from 'react';
import styles from './Logo.module.scss';
import logoKey from '../../../assets/img/icons/logo.svg'

const Logo = (props) => {
    return (
        <div className={styles.logo}>
            <p className={styles.title}>RYPTOFLATS</p>
            <p className={styles.about}>Generated nft apartments Made by interior designers</p>
            <i className={styles.key}>
                <img src={logoKey} alt="key"/>
            </i>
        </div>
    );
}

export default Logo;