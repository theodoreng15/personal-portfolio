"use client";
import React, { useEffect, useState } from "react"
import "./globals.css";
import About from "./components/Aboutme"
import Experience from "./components/Experience"
import Navigation from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Hero from "./components/Hero"


const Home = () => {
  return (
    <>
      <div>
        <Navigation />
      </div>
      <div>
        <Hero />
      </div>

    </>
  );
};

export default Home;
