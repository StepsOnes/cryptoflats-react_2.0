import React from "react";
import {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../../layouts/Navbar/Navbar";
import Header from "../Header/Header";
import MarqueeCards from "../MarqueeCards/MarqueeCards";
import About from "../About/About";
import Rarity from "../Rarity/Rarity";
import Story from "../Story/Story";
import RoadMap from "../RoadMap/RoadMap";
import Team from "../Team/Team";
import Footer from "../../layouts/Footer/Footer";


function App() {
    const [loading, setLoading] = useState(true);
    let preload = document.getElementById('preload');
    if (preload) {
        setTimeout(() => {
            preload.style.display = "none";
            setLoading(false);
        }, 3000)
    }

  return (
    !loading && (
        <div className="wrapper">
            <Navbar />
            <Header />
            <main>
                <MarqueeCards />
                <About />
                <Rarity />
                <Story />
                <RoadMap />
                <Team />
            </main>

            <Footer />
        </div>
    )
  );
}

export default App;
