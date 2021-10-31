import React, { useEffect, useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {
	const [formState, setFormState] = useState({
		name: '',
		email: '',
	});

	const { name, email } = formState;

	useEffect(() => {
		// console.log('Initial useEffect');
	}, []);

	useEffect(() => {
		// console.log('formState changed');
	}, [formState]);

	useEffect(() => {
		// console.log('email changed');
	}, [email]);

	const handleInputChange = ({ target }) => {
		const { name, value } = target;
		setFormState({
			...formState,
			[name]: value,
		});
	};

	return (
		<>
			<h1>useEffect</h1>
			<hr />
			<div className="form-group">
				<input
					className="form-control"
					type="text"
					name="name"
					placeholder="Your Name"
					autoComplete="off"
					value={name}
					onChange={handleInputChange}
				/>
			</div>
			<div className="form-group">
				<input
					className="form-control mt-3"
					type="email"
					name="email"
					placeholder="Your email"
					autoComplete="off"
					value={email}
					onChange={handleInputChange}
				/>
			</div>

			{name === '123' && <Message />}
		</>
	);
};
