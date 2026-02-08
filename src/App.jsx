import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Events from "./components/Events";
import MeetOurTeam from "./components/MeetOurTeam";
import Contact from "./components/Contact";
import About from "./components/About";
import Stats from "./components/Stats";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Features></Features>
      <Events></Events>
      <MeetOurTeam></MeetOurTeam>
      <Stats></Stats>
      <About></About>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default App;

