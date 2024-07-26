import React from 'react';
import Image from 'next/image';
import BusApp from '../assets/busapp.png'
import SkinMatch from '../assets/skinmatch.jpeg'
import Weather from '../assets/weatherapp.png'

const ProjectCard = ({ imgSrc, alt, title, description }) => (
	<div className="flex-col transform rounded-xl w-full max-w-sm mx-auto mb-8 bg-white shadow-xl transition duration-300 hover:scale-105">
		<div className="relative h-48 w-full">
			<Image
				src={imgSrc}
				alt={alt}
				layout="fill"
				objectFit="cover"
				className="rounded-t-xl"
			/>
		</div>
		<div className="p-4">
			<h3 className="text-xl font-semibold mb-2">{title}</h3>
			<p className="text-gray-600">{description}</p>
		</div>
	</div>
);

const Projects = () => {
	return (
		<div className="container mx-auto px-4 py-16 h-screen">
			<h2 className="text-center text-4xl md:text-5xl font-bold mb-12">
				Projects
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				<ProjectCard
					imgSrc={SkinMatch}
					alt="SkinMatch"
					title="SkinMatch: HackIllinois Hackathon Finalist"
					description="SkinMatch was a finalist project in the 2024 HackIllinois HackKnights advanced cohort. It is a novel personalized skincare routine generator made with custom-trained YoloV8 models, a product finder made with Pinecone vector DB. We used React, TailwindCSS, and Flask to connect our front end to the API and we used Kaggle for our datasets.

."
				/>
				<ProjectCard
					imgSrc={BusApp}
					alt="BusApp"
					title="NCHS Bus App"
					description="NCHS Bus App is a real-time bus tracking application, designed to streamline bus schedule management for administrators and students. Built with Node.js and Express, this project features Google Authorization for administrative sign ins, alongside a user-friendly interface to demonstrate timely updates and bus changes.	"
				/>
				<ProjectCard
					imgSrc={Weather}
					alt="Weather"
					title="Weather App"
					description="Being my first introduction to Next.js, this application is a simple weather forecast that leverages OpenWeather's One Call API to display live data on thousands of cities in the world. The backend is built with Node.js and Express, integrating JSON Web Tokens for authentication and Cookie History for maintaining user sessions (SQLite database) The app features a responsive front end built with React, and utilizes TailwindCSS for styling. "
				/>
			</div>
		</div>
	);
};

export default Projects;
