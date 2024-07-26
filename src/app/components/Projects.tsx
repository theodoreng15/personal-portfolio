import React from 'react';
import Image from 'next/image';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import BusApp from '../assets/busapp.png'
import SkinMatch from '../assets/skinmatch.jpeg'
import Weather from '../assets/weatherapp.png'



const Projects = () => {
	return (
		<>
			<div className="flex-col">
				<div className="text-center text-4xl md:text-5xl font-bold mb-4 pt-28">
					Projects
				</div>
				<div className="flex gap-10 justify-center h-screen p-5 py-7">
					<div
						className="flex transform rounded-xl h-1/2 w-1/3 bg-white shadow-xl transition duration-300 hover:scale-105">
						<div className=" items-center justify-center">
							<Image className="p-3" src={SkinMatch} alt="SkinMatch"></Image>
						</div>
					</div>
					<div
						className="flex transform rounded-xl h-1/2 w-1/3 bg-white shadow-xl transition duration-300 hover:scale-105">
						<div className=" items-center justify-center">
							<Image className="p-3" src={BusApp} alt="BusApp"></Image>
						</div>
					</div>
					<div
						className="flex transform rounded-xl h-1/2 w-1/3 bg-white shadow-xl transition duration-300 hover:scale-105">
						<div className=" items-center justify-center">
							<Image className="p-3" src={Weather} alt="Weather"></Image>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Projects;
