


import React from 'react';
import Image from "next/image";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Score from "./Components/scorecard/page";
import Contact from "./Components/Contact/page"
import Tournaments from '../tournaments/tournaments'
import About from './components/About'
import Team from './components/Team'

export default function Home() {
  return (
    <>
      <Hero/>
      <Tournaments/> 
    <Score/>
    <About/>
      <Team/>
    <Contact/>
    </>
  );


}

