import React from 'react';
import styles from './Team.module.scss'
import classNames from "classnames";
import {dataPersonsCard} from "../../../data/dataPersonsCard";


const Team = (props) => {
    return (
        <section id={"team"} className={classNames("section-padding")}>
            <div className="container">
                <div className={classNames("title-box", styles["title-box"])}>
                    <h1 className={classNames(styles.title, "section-title")}>
                        TEAM
                    </h1>

                    <div className={classNames("circle-animate", styles["circle-animate__purple"])}>

                    </div>
                </div>

                <p className={styles.text}>
                    Cryptoflats was created by two architects who are passionate about blockchain and NFT technologies.
                    The idea of free creative interpretation and the absence of limiting technical factors made it
                    possible to create a bright and stylish interior collection that includes elements of surrealism and
                    comfort all rolled into one.
                </p>

                <div className={styles["persons-cards"]}>
                    {dataPersonsCard.map((item, index) => {
                        return <div key={index} className={styles["persons-card"]}>
                            <div className={classNames(styles.img, styles[item.id])}>
                                <img src={item.img} alt="person"/>
                            </div>
                            <div className={styles.about}>
                                <h1 className={styles['person-name']}>
                                    {item.name}
                                </h1>
                                <p className={styles['position']}>
                                    {item.about}
                                </p>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </section>
    );
}

export default Team;