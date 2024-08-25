import React, { useEffect, useRef, useState } from 'react';

export const MouseSpotlight = ({ children }: { children: React.ReactNode }) => {
	const divRef = useRef<HTMLDivElement>(null);
	const [position, setPosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			setPosition({ x: e.clientX, y: e.clientY });
		};

		window.addEventListener('mousemove', handleMouseMove);

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
		};
	}, []);

	return (
		<div ref={divRef} className="relative min-h-screen overflow-hidden">
			<div
				className="pointer-events-none fixed inset-0 z-30 transition duration-300"
				style={{
					background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.08), transparent 40%)`,
				}}
			/>
			{children}
		</div>
	);
};
