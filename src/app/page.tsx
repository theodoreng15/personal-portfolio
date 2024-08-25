"use client";
import { Link, Element } from 'react-scroll'
import React, { useEffect, useState } from "react"
import "./globals.css";
import About from "./components/Aboutme"
import Experience from "./components/Experience"
import Navigation from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Hero from "./components/Hero"
import Contact from "./components/Contactme"
import { MouseSpotlight } from './components/MouseSpotlight';

{/*style={{ background: 'linear-gradient(135deg, #d0eaf8, #f9c1d2)' }} */ }
const Home = () => {
  return (
    <>
      <MouseSpotlight>
        <div className="min-h-screen bg-slate-900 text-black" style={{ background: 'linear-gradient(135deg, #d0eaf8, #f9c1d2)' }}>
          <div>
            <Navigation />
            <div className="">
              <Element name="hero">
                <Hero />
              </Element>
              <Element name="experience">
                <Projects />
              </Element>
              <Element name="about">
                <About />
              </Element>
              <Element name="skills">
                <Skills />
              </Element>
              <Element name="contact">
                <Contact />
              </Element>
            </div>
          </div>
        </div>
      </MouseSpotlight>

    </>
  );
};

export default Home;
