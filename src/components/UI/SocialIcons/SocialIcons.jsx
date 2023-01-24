import React from 'react';
import styles from './SocialIcons.module.scss';
import {dataLinks} from "../../../data/dataLinks";


const SocialIcons = (props) => {
    return (
        <ul className={props.class}>
            {dataLinks.map((item, index) => {
                return <li key={`icon ${index}`}>
                    <a href={item.link}>
                        <img src={item.img} alt={item.name}/>
                    </a>
                </li>
            })}
        </ul>
    );
}

export default SocialIcons;