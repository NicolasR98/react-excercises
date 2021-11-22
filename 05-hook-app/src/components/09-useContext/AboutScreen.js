import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const AboutScreen = () => {
	const { user, setUser } = useContext(UserContext);

	const handleLogout = () => {
		setUser({});
		console.log('user logged out');
	};

	return (
		<div>
			<h1>About Screen</h1>
			<hr />

			<pre className="container">{JSON.stringify(user, null, 3)}</pre>

			<button className="btn btn-warning" onClick={handleLogout}>
				Logout
			</button>
		</div>
	);
};
