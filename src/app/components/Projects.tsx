import React from 'react';
import Image, { StaticImageData } from 'next/image';
import BusApp from '../assets/busapp.png'
import SkinMatch from '../assets/skinmatch.jpeg'
import Weather from '../assets/weatherapp.png'
import GithubSymbol from "../assets/github.png"

interface ProjectCardProps {
  imgSrc: StaticImageData;
  alt: string;
  title: string;
  description: string;
  techStack: string[];
  github: string;
  demo: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imgSrc, alt, title, description, techStack, github, demo }) => (
  <div className="flex flex-col justify-center rounded-xl w-full max-w-sm mx-auto mb-8 bg-white shadow-xl transition duration-300 hover:scale-105">
    <div className="relative h-48 w-full">
      <Image
        src={imgSrc}
        alt={alt}
        width={500}
        height={500}
        className="rounded-t-xl"
      />
    </div>
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
    <div className="flex flex-wrap mb-4 ml-3 ">
      {techStack.map((tech, index) => (
        <span key={index} className="bg-gray-200 text-gray-800 text-sm rounded mr-2 mb-2 font-medium px-2.5 py-0.5">
          {tech}
        </span>
      ))}
    </div>
    <div className="flex justify-center mt-auto mb-3">
      <a href={github} target="_blank" className="inline-flex items-center px-4 py-2 bg-gray-800 text-white font-semibold rounded-md shadow-md hover:bg-gray-700 transition-colors">
        <Image src={GithubSymbol.src} alt="Github" width={20} height={20} className="w-5 h-5 mr-2.5" />
        View on GitHub
      </a>
    </div>
  </div>
);

const Projects: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-24 h-screen">
      <h2 className="text-center text-4xl md:text-5xl font-bold mb-12">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          imgSrc={SkinMatch}
          alt="SkinMatch"
          title="SkinMatch: HackIllinois Hackathon Finalist"
          description="SkinMatch was a finalist project in the 2024 HackIllinois HackKnights advanced cohort. It is a novel personalized skincare routine generator made with custom-trained YoloV8 models, a product finder made with Pinecone vector DB. We used React, TailwindCSS, and Flask to connect our front end to the API and we used Kaggle for our datasets."
          techStack={["React.js", "TailwindCSS", "Flask", "YoloV8", "Pinecone", "Kaggle"]}
          github="https://github.com/adeshkumar1/SkinMatch"
          demo={["DevPost", "https://devpost.com/software/skinmatch#updates"]}
        />
        <ProjectCard
          imgSrc={BusApp}
          alt="BusApp"
          title="NCHS Bus App"
          description="NCHS Bus App is a real-time bus tracking application, designed to streamline bus schedule management for administrators and students. Built with Node.js and Express, this project features Google Authorization for administrative sign ins, alongside a user-friendly interface to demonstrate timely updates and bus changes.	"
          techStack={["Node.js", "Express", "Google Authorization"]}
          github="https://github.com/NCHS-SE22-23/busApp"
          demo={["Landing Page", "https://nchsbusapp.org/"]}
        />
        <ProjectCard
          imgSrc={Weather}
          alt="Weather"
          title="Weather App"
          description="Being my first introduction to Next.js, this app is a simple weather forecast that leverages OpenWeather's Five Day API to display live data on thousands of cities worldwide. The backend is built with Node.js and Express, integrating JSON Web Tokens for authentication and Cookie History for maintaining user sessions (SQLite database) The app features a responsive front end built with React and TailwindCSS for styling."
          techStack={["Next.js", "Node.js", "Express", "OpenWeather API", "JSON Web Tokens", "SQLite", "TailwindCSS"]}
          github="https://github.com/theodoreng15/weather-forecast"
          demo={[]}
        />
      </div>
    </div>
  );
};

export default Projects;
