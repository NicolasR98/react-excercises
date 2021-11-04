import React, { useLayoutEffect, useRef, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';

export const Layout = () => {
	const { counter, increment } = useCounter();
	const { loading, data } = useFetch(
		`https://breakingbadapi.com/api/quotes/${counter}`
	);

	const isValidData = !loading && data.length > 0;
	const { author, quote } = isValidData && data[0];

	const paragraphRef = useRef();
	const [boxSize, setBoxSize] = useState({});

	useLayoutEffect(() => {
		setBoxSize(paragraphRef.current.getBoundingClientRect());
	}, [quote]);

	return (
		<div>
			<h1>Layout Effect</h1>

			<hr />

			<blockquote className="blockquote text-left">
				<p ref={paragraphRef}>{quote}</p>
				<footer className="blockquote-footer">{author}</footer>
			</blockquote>

			<pre>{JSON.stringify(boxSize, null, 3)}</pre>

			<button className="btn btn-primary" onClick={() => increment(1)}>
				Next quoute
			</button>
		</div>
	);
};
