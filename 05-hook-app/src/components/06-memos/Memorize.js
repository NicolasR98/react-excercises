import React, { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { Small } from './Small';

export const Memorize = () => {
    const [show, setShow] = useState(true);
    const { counter, increment } = useCounter(10);
    
    const FACTOR = 1;
    
	const handleShow = () => {
		setShow(!show);
	};

	return (
		<div>
			<h1>
				Memorize <Small value={counter} />
			</h1>
			<hr />

			<button className="btn btn-primary" onClick={() => increment(FACTOR)}>
				+1
			</button>

			<button className="btn btn-outline-primary mx-3" onClick={handleShow}>
				Show/Hide {JSON.stringify(show)}
			</button>
		</div>
	);
};
