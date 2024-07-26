import React, { useState } from "react"
import { Link, Element } from 'react-scroll';
import About from "./Aboutme"
import Experience from "./Experience"
import Projects from "./Projects"
import Skills from "./Skills"
import Hero from "./Hero"

//Implement hamburger menu?
//Remove w-full?
const Navigation = () => {
	return (
		<>
			<header className="fixed w-full bg-gray-200 shadow-md z-50">
				<nav className="flex items-center justify-between p-6 text-lg">
					<div>
						<Link to="hero" className="mx-6 cursor-pointer" smooth={true} duration={500}>
							theodoreng.
						</Link>
					</div>
					<div className="flex-row justify-center items-center ">
						<Link to="experience" className="p-6 cursor-pointer" smooth={true} duration={500}>
							Projects
						</Link>
						<Link to="about" className="p-6 cursor-pointer" smooth={true} duration={500}>
							About
						</Link>
						<Link to="skills" className="p-6 cursor-pointer" smooth={true} duration={500}>
							Skills
						</Link>
						<Link to="contact" className="p-6 cursor-pointer" smooth={true} duration={500}>
							Contact
						</Link>
					</div>
					<div className="mx-6">
						<p>
							Resume
						</p>
					</div>
				</nav>
			</header >

		</>
	);
};

export default Navigation;
