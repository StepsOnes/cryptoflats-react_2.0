import React, {useState} from 'react';
import styles from './Header.module.scss';
import classNames from "classnames";
import videoMP4 from '../../../assets/video/appart-build.mp4';
import videoWEBM from '../../../assets/video/appart-buid.webm';
import sofa from '../../../assets/img/header/sofa.png';
import chess from '../../../assets/img/header/chess.png';
import goldCard from '../../../assets/img/header/gold_card.png';
import diamondCard from '../../../assets/img/header/diamond_card.png';
import table from '../../../assets/img/header/table.png';
import armchair from '../../../assets/img/header/armchair.png';

const Header = (props) => {
    const [buttonText, setButtonText] = useState("GET NFT PASS");

    let handleMouseEnter = () => {
        setButtonText("COMING SOON");
    }
    let mouseLeaveHandler = () => {
        setButtonText("GET NFT PASS");
    }

    return (
        <header className={styles.header}>
            <div className={styles.row}>
                <div className={classNames(styles['header-col'], styles['about-rooms'])}>
                    <video className="autoplay" muted playsInline autoPlay loop>
                        <source src={videoWEBM} type="video/webm" />
                        <source src={videoMP4} type="video/mp4" />
                    </video>

                    <div className={classNames(styles['about-rooms__text'])}>
                        <h1 className={classNames(styles['main-title'], "title")}>
                            PLAY TO EARN GAME
                        </h1>

                        <h2 className={classNames(styles['min-title'], "title")}>
                            5555 NFT LIVING ROOMS
                        </h2>

                        <p className={styles.text}>
                            Coming soon!
                        </p>

                        <ul className={styles.hashtags}>
                            <li className={classNames(styles.hashtag, styles['hashtag-1'])}>#p2e</li>
                            <li className={classNames(styles.hashtag, styles['hashtag-2'])}>#avalanche</li>
                            <li className={classNames(styles.hashtag, styles['hashtag-3'])}>#avaxnft</li>
                            <li className={classNames(styles.hashtag, styles['hashtag-4'])}>#defi</li>
                        </ul>
                    </div>
                </div>

                <div className={classNames(styles['header-col'], styles['about-nft'])}>
                    <h1 className={styles['drop-name']}>
                        DROP #
                    </h1>

                    <p className={styles['about-drop']}>
                        1111 NFT CARDS
                    </p>

                    <button className={styles['drop-btn']} onMouseEnter={handleMouseEnter} onMouseLeave={mouseLeaveHandler}>
                        {buttonText}
                    </button>

                    <div className={classNames(styles['dec-anim'], styles.sofa)}>
                        <img src={sofa} alt="sofa"/>
                    </div>

                    <div className={classNames(styles['dec-anim'], styles.armchair)}>
                        <img src={armchair} alt="armchair"/>
                    </div>

                    <div className={classNames(styles['dec-anim'], styles.chess)}>
                        <img src={chess} alt="chess"/>
                    </div>

                    <div className={classNames(styles['dec-anim'], styles['diamond-card'])}>
                        <img src={diamondCard} alt="diamond-card"/>
                    </div>

                    <div className={classNames(styles['dec-anim'], styles['gold-card'])}>
                        <img src={goldCard} alt="gold-card"/>
                    </div>

                    <div className={classNames(styles['dec-anim'], styles.table)}>
                        <img src={table} alt="table"/>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;