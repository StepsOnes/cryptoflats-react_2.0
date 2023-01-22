import React from 'react';
import styles from './About.module.scss'
import classNames from "classnames";
import aboutBg from '../../../assets/img/bg/about-bg.jpg'

const About = (props) => {
    return (
        <section id="about" className={styles.about} style={{ backgroundImage: `url(${aboutBg})` }}>
            <div className="container">
                <h1 className={classNames(styles.title, "section-title text-center")}>
                    ABOUT
                </h1>

                <p className={classNames(styles.text, "text-center")}>
                    Cryptoflats - is a collection of generated NFT tokens on the Ethereum blockchain. These tokens are isometric rooms with bright design and many detailes. By collecting all of them, you will be able to construct your own Сryptoflat, consisting of 5 types of rooms. First stage is 5555 nft living rooms. The next stages will be 1000 pieces less each.
                </p>

                <h1 className={classNames(styles.title, "section-title text-center")}>
                    SPECS
                </h1>

                <p className={classNames(styles.text, "text-center")}>
                    Every Cryptoflat room is unique and created from a combination of more than 500+ 3D elements such as walls, floors, furniture, decor, light and cats :) The collection implies the presence of rarity in its components.
                </p>
            </div>
        </section>
    );
}

export default About;