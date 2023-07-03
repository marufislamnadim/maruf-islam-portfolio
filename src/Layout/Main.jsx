import { useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import Contact from "../components/Contact/Contact";
import Portfolio from "../components/Portfolio/Portfolio";

const Main = () => {
    const [preLoading, setPreLoading] = useState(true);
    const preLoader = document.getElementById("preLoader");

    if (preLoader) {
        setTimeout(() => {
            preLoader.style.display = "none";
            setPreLoading(false);
        }, 1000);
    }

    return (
        !preLoading && (
            <div className="relative bg-base-200">
                <NavBar></NavBar>
                <Hero></Hero>
                <About></About>
                <Portfolio></Portfolio>
                <Contact></Contact>
                <Footer></Footer>
            </div>
        )
    );
};

export default Main;
