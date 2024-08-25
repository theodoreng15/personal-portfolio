const About = () => {
	return (
		<>
			<div className="flex h-screen shadow">
				<div className="flex items-center text-4xl font-bold md:text-5xl ml-36 pl-10 w-4/5 my-28 bg-gray-200">
					About Me
				</div>
				<div className="flex-col align-center text-xl md:text-2xl font-semibold p-8 mr-48  my-28  bg-gray-200">
					<div>
						Hi👋 My name is Theodore Ng, and I&apos;m a Computer Engineer studying at the University of Illinois Urbana-Champaign. I have extensive experiences with Electrical Subsystems + Full Stack Development with most of my experience stemming from Illinois Space Society and Disruption Labs.
					</div>
					<div className="mt-6">
						This upcoming year, I&apos;ll be taking Computer Architecture, Applied Statistics, Analog Signal Processing, Data Structures, and Computer Systems & Programming. I&apos;m interested in anything Embedded Systems, Software Engineering, and Computer Architecture, so please feel free to reach out with any questions! theodoreng15@gmail.com
					</div>
				</div>
			</div>
		</>);
};

export default About;
