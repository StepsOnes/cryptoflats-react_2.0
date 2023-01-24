import React from 'react';
import Navbar from "../layouts/Navbar/Navbar";
import Header from "../elements/Header/Header";
import MarqueeCards from "../elements/MarqueeCards/MarqueeCards";
import About from "../elements/About/About";
import Rarity from "../elements/Rarity/Rarity";
import Story from "../elements/Story/Story";
import RoadMap from "../elements/RoadMap/RoadMap";
import Team from "../elements/Team/Team";
import Footer from "../layouts/Footer/Footer";

const Home = (props) => {
    return (
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
    );
}

export default Home;