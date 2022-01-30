import { Routes, Route } from "react-router-dom";

import "./App.css";

import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contanct from "./Components/Contact/Contact";
import Projects from "./Components/Projects/Projects";
import Footer from "./Components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="projects" element={<Projects />} />
                <Route path="contact" element={<Contanct />} />
            </Routes>

            <Footer />
        </div>
    );
}

export default App;
