import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';

export const FormWithCustomHook = () => {

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: '',
    })

    const {name, email, password} = formValues;

    useEffect(() => {
        console.log('email change');
    }, [email]);
	
	return (
		<form>
			<h1>Form with custom hook</h1>
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
			<div className="form-group">
				<input
					className="form-control mt-3"
					type="password"
					name="password"
					placeholder="Your password"
					autoComplete="off"
					value={password}
					onChange={handleInputChange}
				/>
			</div>

			<button type="submit" className="btn btn-primary my-3">
				Submit
			</button>
		</form>
	);
};
