import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import styles from './Faq.module.scss'
import classNames from "classnames";
import {dataFaq} from "../../../data/dataFaq";

const Faq = () => {
    return (
        <div id={"faq"} className={styles.faq}>
            <h1 className={classNames(styles.title, "section-title")}>
                FAQ
            </h1>

            <Accordion alwaysOpen>
                {dataFaq.map((item, index) => {
                    return <Accordion.Item key={index} eventKey={String(index)}>
                        <Accordion.Header className={styles['ac-header}']}>
                            {item.question}
                        </Accordion.Header>
                        <Accordion.Body>
                            {item.answer}
                        </Accordion.Body>
                    </Accordion.Item>
                })}
            </Accordion>
        </div>
    );
}

export default Faq;