import React, { useState } from 'react';
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';

export const RealExampleRef = () => {
	const [show, setShow] = useState(true);

	return (
		<div>
			<h1>Real Example Ref</h1>
			<hr />

			{show && <MultipleCustomHooks />}

			<hr />

			<button
				className="btn btn-outline-primary"
				onClick={() => setShow(!show)}
			>
				Show/Hide
			</button>
		</div>
	);
};
