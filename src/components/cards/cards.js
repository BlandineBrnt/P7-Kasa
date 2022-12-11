import React from "react";
import data from "../../data/logements.json";
import Card from "../../components/card/card";
import "../../components/cards/cards.css";
const Cards = () => {
    return (
        <div className="cards">
            <ul>
                {data.map((logement) => (
                    <Card key={logement.id} logement={logement} />
                ))}
            </ul>
        </div>
    );
};

export default Cards;
