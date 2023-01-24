import React from 'react';
import styles from './MarqueeCards.module.scss';
import Marquee from "react-fast-marquee";
import {dataMarquee1} from "../../../data/dataMarquee1";
import {dataMarquee2} from "../../../data/dataMarquee2";
import {dataMarquee3} from "../../../data/dataMarquee3";

import { v4 as uuidv4 } from 'uuid';

const MarqueeCards = (props) => {
    return (
        <section className={styles.marqueeCards}>
            <Marquee gradient={false} speed={50} direction={"right"} pauseOnClick={true} delay={0.5}>
                {dataMarquee1.map((item) => {
                    return <div key={uuidv4()} className={styles['marquee-card']}><img src={item.img} alt="nft-card"/></div>
                })}
            </Marquee>

            <Marquee gradient={false} speed={50} pauseOnClick={true} delay={0.5}>
                {dataMarquee2.map((item) => {
                    return <div key={uuidv4()} className={styles['marquee-card']}><img src={item.img} alt="nft-card"/></div>
                })}
            </Marquee>

            <Marquee gradient={false} speed={50} direction={"right"} pauseOnClick={true} delay={0.5}>
                {dataMarquee3.map((item) => {
                    return <div key={uuidv4()} className={styles['marquee-card']}><img src={item.img} alt="nft-card"/></div>
                })}
            </Marquee>
        </section>
    );
}

export default MarqueeCards;