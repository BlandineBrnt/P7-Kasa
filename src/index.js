import React from "react"; //importation de react
import ReactDOM from "react-dom/client"; //importation de react dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; //importation du routeur de react
import reportWebVitals from "./reportWebVitals";

import "./index.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import HousingInfo from "./pages/housingInfo/housingInfo";
import ErrorPage from "./pages/error/error";

//création de la racine react
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <Router>
        <Header />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/housing/:id" element={<HousingInfo />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
    </Router>
);

reportWebVitals();
