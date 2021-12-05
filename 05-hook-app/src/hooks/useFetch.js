import { useEffect, useRef, useState } from 'react';

export const useFetch = (url) => {
	const isMounted = useRef(true);
	const [state, setState] = useState({
		data: null,
		error: null,
		loading: true,
	});

	useEffect(() => {
		return () => {
			isMounted.current = false;
		};
	}, []);

	useEffect(() => {
		setState({
			loading: true,
			error: null,
			data: null,
		});

		fetch(url)
			.then((resp) => resp.json())
			.then((data) => {
				if (isMounted.current) {
					setState({
						loading: false,
						error: null,
						data,
					});
				} else {
					console.log('Request cancelled');
				}
			})
			.catch((e) => {
				setState({
					loading: false,
					data: null,
					error: 'Could not load the info',
				});
			});
	}, [url]);

	return state;
};
