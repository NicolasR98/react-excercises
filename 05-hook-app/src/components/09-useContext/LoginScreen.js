import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const LoginScreen = () => {
	const { setUser } = useContext(UserContext);

	const testUser = {
		id: 1234,
		name: 'Nicolas',
	};

	const handleUserLogin = () => {
		setUser(testUser);
        console.log('user set');
	};

	return (
		<div>
			<h1>Login Screen</h1>
			<hr />
			<button className="btn btn-primary" onClick={handleUserLogin}>Login</button>
		</div>
	);
};
