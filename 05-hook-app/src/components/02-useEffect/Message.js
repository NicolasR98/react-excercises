import React, { useEffect, useState } from 'react';

export const Message = () => {
	const [coordinates, setCoordinates] = useState({
		x: 0,
		y: 0,
	});

	const { x, y } = coordinates;

	useEffect(() => {
		console.log('component mounted');

		const getCoordinates = (e) => {
			const eventCoordinates = { x: e?.x, y: e?.y };
			setCoordinates(eventCoordinates);
		};

		window.addEventListener('mousemove', getCoordinates);

        //Cleanup statement for preventing performance issues
		return () => {
			console.log('component unmounted');
			window.removeEventListener('mousemove', getCoordinates);
		};
	}, []);

	return (
		<div>
			<h1>Secret message! {`x:${x} y:${y}`}</h1>
		</div>
	);
};
