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
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'




const Home = () => {
  return (
    <>
      <div className="">
        <div>
          <Navigation />
          <main className="">
            <Element name="hero">
              <Hero />
            </Element>
            <Element name="experience">
              <Experience />
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
          </main>
        </div>
      </div>

    </>
  );
};

export default Home;
