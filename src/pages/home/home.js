import React from "react"; //importation de react
import image from "../../pages/home/images/homeImage.jpg"; //importation de l'image
import "./home.css"; //importation du css
import Card from "../../components/card/card"; //importation du composant card

function Home() {
    //fonction principale pour l'affichage de la Home page
    return (
        <main>
            <section className="sectionIntro">
                <img src={image} alt="Paysage bord de mer" />
                <h1>Chez vous, partout et ailleurs</h1>
            </section>
            <Card />
        </main>
    );
}

export default Home;
