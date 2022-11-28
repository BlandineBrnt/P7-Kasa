import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Apropos from "./pages/Apropos";
import Erreur404 from "./pages/Erreur404";
import FicheLogement from "./pages/FicheLogement";
import Home from "./pages/Home";

const App = () => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Apropos" element={<Apropos />} />
                <Route path="*" element={<Erreur404 />} />
                <Route path="/logement/:id" element={<FicheLogement />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
