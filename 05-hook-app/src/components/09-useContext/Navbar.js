import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
			<div className="container-fluid">
				<NavLink className="navbar-brand" to={'/'}>
					useContext
				</NavLink>
				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div className="navbar-nav">
						<NavLink
                            exact={'true'}
							to={'/'}
							className={({ isActive }) =>
								'nav-link ' + (isActive ? 'active' : '')
							}
						>
							Home
						</NavLink>
						<NavLink
							className={({ isActive }) =>
								'nav-link ' + (isActive ? 'active' : '')
							}
							exact="true"
							to={'/login'}
						>
							Login
						</NavLink>
						<NavLink
							className={({ isActive }) =>
								'nav-link ' + (isActive ? 'active' : '')
							}
							exact="true"
							to={'/about'}
						>
							About
						</NavLink>
					</div>
				</div>
			</div>
		</nav>
	);
};
