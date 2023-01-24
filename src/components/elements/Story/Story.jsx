import React from 'react';
import styles from './Story.module.scss';
import classNames from "classnames";
import buildAnimation from "../../../assets/video/Building-animation.webp";

const Story = (props) => {
    return (
        <section className={classNames(styles.story, "section-padding")}>
            <div className="container">
                <div className={classNames("title-box", styles["title-box"])}>
                    <h1 className={classNames(styles.title, "section-title")}>
                        STORY
                    </h1>

                    <div className={classNames("circle-animate", styles["circle-animate__purple"])}>

                    </div>
                </div>

                <div className={styles.group}>
                    <p className={styles.text}>
                        The main source of inspiration was the idea of a virtual development and meta-verse, where each resident will have their own designer apartments with interactive and financial mechanics. We created a lot of graphic prototypes and animations, an interactive interior and even a whole 3D city ​​block.
                        <br/>
                        <br/>
                        All these developments will certainly serve the future development of the project. For now we found the perfect combination of visual style, interior and spirit of NFT technology - isometric crypto rooms, which later turn into a full-fledged crypto apartment.
                    </p>

                    <div className={styles.animation}>
                        <img src={buildAnimation} alt="buildAnimation"/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Story;