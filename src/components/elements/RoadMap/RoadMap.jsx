import React from 'react';
import styles from './RoadMap.module.scss'
import classNames from "classnames";
import {useState} from "react";
import {dataRoadMap} from "../../../data/dataRoadMap";


const RoadMap = (props) => {
    const [heightEl, setHeightEl] = useState(-1);
    const elRef = React.useRef()

    let toogleAccordion = (index) => {
        setHeightEl(index)
    }

    return (
        <section id={"roadmap"} className={"section-padding"}>
            <div className="container">
                <div className={classNames("title-box", styles["title-box"])}>
                    <h1 className={classNames(styles.title, "section-title")}>
                        ROADMAP
                    </h1>

                    <div className={classNames("circle-animate", styles["circle-animate__purple"])}>

                    </div>
                </div>

                <div className={styles['roadmap-cards']}>
                    {dataRoadMap.map((item, index) => {
                        return <div
                            key={index}
                            className={classNames(styles['roadmap-card'], styles[item.class])}
                            onClick={() => toogleAccordion(index)}>
                            <div className={styles['roadmap-header']}>
                                <div className={styles.progress}>
                                    {item.progress}
                                </div>

                                <h2 className={classNames(styles['roadmap-card__title'])}>
                                    {item.headerTitle}
                                </h2>
                            </div>

                            <div ref={elRef}  style={{maxHeight: heightEl === index ? `${elRef.current.scrollHeight}px` : 0}}
                                 className={styles['roadmap-body']}>
                                <h2 className={classNames(styles['roadmap-body__title'], styles[item.classTitle])}>
                                    {item.titleBody}
                                </h2>

                                <ul className={styles['roadmap-card__list']}>
                                    {item.listText.map((item, index) => {
                                        return <li key={index}>{item}</li>
                                    })}
                                </ul>
                            </div>
                        </div>
                    })}
                </div>


            </div>
        </section>
    );
}

export default RoadMap;