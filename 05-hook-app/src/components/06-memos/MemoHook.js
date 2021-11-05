import React, { useMemo, useState } from 'react';
import { heavyIterator } from '../../helpers/heavyIterator';
import { useCounter } from '../../hooks/useCounter';

export const MemoHook = () => {
	const [show, setShow] = useState(true);
	const { counter, increment } = useCounter(5000);

	const FACTOR = 1;

	const handleShow = () => {
		setShow(!show);
	};

    //This hook allow us to memorize a value that involves permorming heavy processes without the need for invoke it again when re-render
    const memoHeavyIterator = useMemo(() => heavyIterator(counter), [counter]);

	return (
		<div>
			<h1>Memo Hook</h1>
			<h3>
				Counter: <small>{counter}</small>
			</h3>
			<hr />
			<p>{memoHeavyIterator}</p>

			<button className="btn btn-primary" onClick={() => increment(FACTOR)}>
				+1
			</button>

			<button className="btn btn-outline-primary mx-3" onClick={handleShow}>
				Show/Hide {JSON.stringify(show)}
			</button>
		</div>
	);
};
