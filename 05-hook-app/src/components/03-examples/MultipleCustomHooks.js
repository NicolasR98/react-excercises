import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';

export const MultipleCustomHooks = () => {
	const { counter, increment } = useCounter();
	const { loading, data } = useFetch(
		`https://breakingbadapi.com/api/quotes/${counter}`
	);

	const isValidData = !loading && data.length > 0;
	const { author, quote } = isValidData && data[0];

	return (
		<div>
			<h1>Breaking Bad quoutes</h1>
			<hr />

			{loading && (
				<div className="alert alert-info text-center">... Loading</div>
			)}

			{!loading && (
				<blockquote className="blockquote text-left">
					<p>{quote}</p>
					<footer className="blockquote-footer">{author}</footer>
				</blockquote>
			)}
			<button className="btn btn-primary" onClick={() => increment(1)}>
				Next quoute
			</button>
		</div>
	);
};
