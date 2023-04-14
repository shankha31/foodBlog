import React from "react";
import './style.css'
import Home from "./home";
import About from "./about";
import LatestArticle from "./latestArticle";
import Footer from "./footer";
const App = () => {
    return (
        <>
            <Home/>
            <About />
            <LatestArticle/>
            <Footer/>
        </>
    );
}

export default App;


