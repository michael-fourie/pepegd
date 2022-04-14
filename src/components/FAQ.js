import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
import "../style/faq.css"
const data = {
    title: "Pepegd FAQ",
    rows: [
        {
            title: "Wen mint?",
            content: `mint on 4/20. 4/20 is gud`,
        },
        {
            title: "Wen Cards Snapshot",
            content:
                "The snapshot for the JPEGd Card Holders will occur on Easter Sunday",
        },
        {
            title: "What royalties?",
            content: `Pepeg's have a 5% royalty. 2% of this will be sent directy to JPEG'd DAO's treasury. 3% will go to the team.`,
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