import React from 'react';
import styles from './Game.module.scss'
import classNames from "classnames";
import gamePlace from '../../../assets/img/game_img/game_box.png'
import room1 from '../../../assets/img/game_img/drop-1.png';
import room2 from '../../../assets/img/game_img/drop-2.png';
import room3 from '../../../assets/img/game_img/drop-3.png';
import room4 from '../../../assets/img/game_img/drop-4.png';
import room5 from '../../../assets/img/game_img/drop-5.png';

const Game = (props) => {
    return (
        <div className={styles.game}>
            <h1 className={classNames(styles.title, "section-title")}>
                THE GAME
            </h1>

            <p className={styles.text}>
                Our project is about design, entertainment and interaction. We want to unite everyone who liked our project into one big and friendly community. After you put all the rooms together and turn them into a full-fledged apartment, then you can invite your friends to it and interact with each other using avatars.
            </p>

            <div className={styles["game-place"]}>
                <img src={gamePlace} alt="gamePlace" />

                <div className={classNames(styles.room, styles['drop5'])}>
                    <img src={room5} alt="drop#5" />
                    <h1 className={classNames(styles['name-drop'], styles['drop-text'], styles['name-drop5'])}>
                        DROP#5
                    </h1>
                    <p className={classNames(styles['about-drop'], styles['about-drop5'], styles['drop-text'])}>
                        Secret room
                    </p>
                </div>

                <div className={classNames(styles.room, styles['drop3'])}>
                    <img src={room3} alt="drop#3" />
                    <h1 className={classNames(styles['name-drop'], styles['drop-text'], styles['name-drop3'])}>
                        DROP#3
                    </h1>
                    <p className={classNames(styles['about-drop'], styles['about-drop3'], styles['drop-text'])}>
                        Kitchen and Dining room
                    </p>
                </div>

                <div className={classNames(styles.room, styles['drop4'])}>
                    <img src={room4} alt="drop#4" />
                    <h1 className={classNames(styles['name-drop'], styles['drop-text'], styles['name-drop5'])}>
                        DROP#4
                    </h1>
                    <p className={classNames(styles['about-drop'], styles['about-drop5'], styles['drop-text'])}>
                        Playroom
                    </p>
                </div>

                <div className={classNames(styles.room, styles['drop2'])}>
                    <img src={room2} alt="drop#2" />
                    <h1 className={classNames(styles['name-drop'], styles['drop-text'], styles['name-drop5'])}>
                        DROP#2
                    </h1>
                    <p className={classNames(styles['about-drop'], styles['about-drop5'], styles['drop-text'])}>
                        Bedroom
                    </p>
                </div>

                <div className={classNames(styles.room, styles['drop1'])}>
                    <img src={room1} alt="drop#1" />
                    <h1 className={classNames(styles['name-drop'], styles['drop-text'], styles['name-drop5'])}>
                        DROP#1
                    </h1>
                    <p className={classNames(styles['about-drop'], styles['about-drop5'], styles['drop-text'])}>
                        Living room
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Game;