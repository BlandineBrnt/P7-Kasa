import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Apropos from "./pages/Apropos";
import Error404 from "./pages/Erreur404";
import FicheLogement from "./pages/FicheLogement";
import { GlobalStyle } from "./styles/style";
import datas from "./assets/data/data.json";
import Home from "./pages/Home";

const App = () => {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/apropos" element={<Apropos />} />
                <Route
                    path="/fichelogement/:id"
                    data={datas}
                    element={<FicheLogement />}
                />
                <Route path="*" element={<Error404 />} />
            </Routes>
        </BrowserRouter>
    );
};
export default App;
