import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
import "../style/faq.css"
const data = {
    title: "Pepegd FAQ",
    rows: [
        {
            title: "Wen mint?",
            content: `The minting will occur ....`,
        },
        {
            title: "Wen Cards Snapshot",
            content:
                "The snapshot for the JPEGd Card Holders will occur on Easter Sunday",
        },
        {
            title: "Wen reveal?",
            content: `The minted Pepeg's will be revealed instantly upon mint.`,
        },
        {
            title: "Is pepeg'd gud?",
            content: `Pepeg'd gud. Cards gud. Lifes gud.`,
        },
    ],
};

const styles = {
    bgColor: 'transparent',
    titleTextColor: "white",
    rowTitleColor: "white",
    rowContentColor: 'white',
    arrowColor: "white",
};

const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
};

export default function FAQ() {

    return (

            <Faq
                data={data}
                styles={styles}
                config={config}
            />

    );
}