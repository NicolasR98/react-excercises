import { useEffect, useState } from 'react';

export const useFetch = (url) => {
	const [state, setState] = useState({
		data: null,
		error: null,
		loading: true,
	});

	useEffect(() => {
		setState({
			loading: true,
			error: null,
			data: null,
		});

		fetch(url)
			.then((resp) => resp.json())
			.then((data) => {
				setState({
					loading: false,
					error: null,
					data,
				});
			});
	}, [url]);

	return state;
};
