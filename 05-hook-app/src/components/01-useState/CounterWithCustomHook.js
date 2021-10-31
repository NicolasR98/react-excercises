import React from 'react';
import { useCounter } from '../../hooks/useCounter';

export const CounterWithCustomHook = () => {
	const { state, increment, decrement, reset } = useCounter();

	return (
		<>
			<h1>Counter with custom hook: {state}</h1>
			<hr />
			<button className="btn btn-success" onClick={() => increment(2)}>
				+1
			</button>
			<button className="btn btn-warning mx-3" onClick={() => reset()}>
				Reset
			</button>
			<button className="btn btn-danger" onClick={() => decrement()}>
				-1
			</button>
		</>
	);
};
