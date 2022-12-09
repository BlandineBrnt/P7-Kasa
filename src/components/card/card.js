import React from "react";
import { Link } from "react-router-dom";
import data from "../../data/logements.json";
import "./card.css";

function Card() {
    const cards = data;

    return (
        <section className="cardContainerWrap">
            {cards.map((card) => {
                return (
                    <Link
                        to={`/housing/${card.id}`}
                        key={card.id}
                        title={card.title}
                    >
                        <article className="cardContainer">
                            <img src={card.cover} alt={card.title} />
                            <h2>{card.title}</h2>
                        </article>
                    </Link>
                );
            })}
        </section>
    );
}

export default Card;
