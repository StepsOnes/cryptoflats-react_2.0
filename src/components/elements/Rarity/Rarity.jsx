import React, {useState} from 'react';
import styles from './Rarity.module.scss';
import classNames from "classnames";
import typicalPoster from '../../../assets/img/rarity_img/posters/Typical.jpg';
import silverPoster from '../../../assets/img/rarity_img/posters/Silver.jpg';
import goldPoster from '../../../assets/img/rarity_img/posters/Gold.jpg';
import diamondPoster from '../../../assets/img/rarity_img/posters/Diamond.jpg';
import apartment from '../../../assets/img/rarity_img/int/25.png'

const Rarity = (props) => {
    const [tabActive, setTabActive] = useState(1);

    let changeTab = (index, event) => {
        setTabActive(index);
    }

    let toggleClass = (index) => {
        return tabActive === index ? classNames(styles.tab, styles.active) : styles.tab;
    }

    return (
        <section className={styles.rarity}>
            <div className={styles.about}>
                <div className="container">
                    <h1 className={classNames(styles.title, "section-title text-center")}>
                        RARITY
                    </h1>

                    <p className={classNames(styles.text, "text-center")}>
                        Each class of Nfs has a different probability of being minted. There will be 5555 GEN 1 NFTs in which: NFT RARITIES & MINTING
                    </p>

                    <div className={styles['tabs-buttons']}>
                        <button onClick={(event) => changeTab(1, event)}
                                className={tabActive === 1 ? classNames(styles['tabs-button'], styles.active) : styles['tabs-button']}>
                            STANDART FLATS #70%
                        </button>

                        <button onClick={(event) => changeTab(2, event)}
                            className={tabActive === 2 ? classNames(styles['tabs-button'], styles.active) : styles['tabs-button']}>
                            SILVER FLATS #15%
                        </button>

                        <button onClick={(event) => changeTab(3, event)}
                            className={tabActive === 3 ? classNames(styles['tabs-button'], styles['active-gold']) : styles['tabs-button']}>
                            GOLD FLATS #10%
                        </button>

                        <button onClick={(event) => changeTab(4, event)}
                            className={tabActive === 4 ? classNames(styles['tabs-button'], styles['active-diamond']) : styles['tabs-button']}>
                            DIAMOND FLATS #5%
                        </button>
                    </div>
                </div>
            </div>
            <div className={styles.tabs}>
                <div id={"typical"}
                     style={{background: `url(${typicalPoster})`}}
                     className={toggleClass(1)}>
                    <div className="container">
                        <div className={styles['about-flats']}>
                            The most popular rarity with huge variety of backgrounds in different colors and shapes
                        </div>

                        <div className={styles.group}>
                            <div className={styles.apartment}>
                                <img src={apartment} alt=""/>
                            </div>

                            <div className={styles['flats-info']}>
                                <ul className={styles['flats-info__points']}>
                                    <li>Income per day (Staking)</li>
                                    <li>Unstaking claim</li>
                                    <li>Token claim</li>
                                    <li>Token distribution</li>
                                    <li>Next gen# opening</li>
                                </ul>

                                <ul className={styles['flats-info__about']}>
                                    <li>350 CFLAT</li>
                                    <li>1500 CFLAT on balance</li>
                                    <li>85% to wallet</li>
                                    <li>15% to participants</li>
                                    <li>50% discount</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div id={"silver"}
                     style={{background: `url(${silverPoster})`}}
                     className={toggleClass(2)}>
                    <div className="container">
                        <div className={styles['about-flats']}>
                            It has a cold grey metal background with a signing SILVER RARITY on a side of wall
                        </div>

                        <div className={styles.group}>
                            <div className={styles.apartment}>
                                <img src={apartment} alt=""/>
                            </div>

                            <div className={styles['flats-info']}>
                                <ul className={styles['flats-info__points']}>
                                    <li>Income per day (Staking)</li>
                                    <li>Unstaking claim</li>
                                    <li>Token claim</li>
                                    <li>Token distribution</li>
                                    <li>Next gen# opening</li>
                                </ul>

                                <ul className={styles['flats-info__about']}>
                                    <li>350 CFLAT</li>
                                    <li>1500 CFLAT on balance</li>
                                    <li>85% to wallet</li>
                                    <li>15% to participants</li>
                                    <li>50% discount</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div id={"gold"}
                     style={{background: `url(${goldPoster})`}}
                     className={toggleClass(3)}>
                    <div className="container">
                        <div className={styles['about-flats']}>
                            Gold rarity NFT has a bright goldish background with a signing GOLD RARITY on its side wall
                        </div>

                        <div className={styles.group}>
                            <div className={styles.apartment}>
                                <img src={apartment} alt=""/>
                            </div>

                            <div className={styles['flats-info']}>
                                <ul className={styles['flats-info__points']}>
                                    <li>Income per day (Staking)</li>
                                    <li>Unstaking claim</li>
                                    <li>Token claim</li>
                                    <li>Token distribution</li>
                                    <li>Next gen# opening</li>
                                </ul>

                                <ul className={styles['flats-info__about']}>
                                    <li>350 CFLAT</li>
                                    <li>1500 CFLAT on balance</li>
                                    <li>85% to wallet</li>
                                    <li>15% to participants</li>
                                    <li>50% discount</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div id={"diamond"}
                     style={{background: `url(${diamondPoster})`}}
                     className={toggleClass(4)}>
                    <div className="container">
                        <div className={styles['about-flats']}>
                            It has a brilliant looking background with a signing DIAMOND RARITY on a side of wall
                        </div>

                        <div className={styles.group}>
                            <div className={styles.apartment}>
                                <img src={apartment} alt=""/>
                            </div>

                            <div className={styles['flats-info']}>
                                <ul className={styles['flats-info__points']}>
                                    <li>Income per day (Staking)</li>
                                    <li>Unstaking claim</li>
                                    <li>Token claim</li>
                                    <li>Token distribution</li>
                                    <li>Next gen# opening</li>
                                </ul>

                                <ul className={styles['flats-info__about']}>
                                    <li>350 CFLAT</li>
                                    <li>1500 CFLAT on balance</li>
                                    <li>85% to wallet</li>
                                    <li>15% to participants</li>
                                    <li>50% discount</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Rarity;