import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';
import { Navbar } from './Navbar';

export const AppRouter = () => {
	return (
		<Router>
			<div>
				<Navbar />
				<Routes>
					<Route exact path="/login" element={<LoginScreen />} />
					<Route exact path="/about" element={<AboutScreen />} />
					<Route exact path="/" element={<HomeScreen />} />
					<Route path="*" element={<HomeScreen />} />
				</Routes>
			</div>
		</Router>
	);
};
