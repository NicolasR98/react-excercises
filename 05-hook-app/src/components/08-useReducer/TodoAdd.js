import React from 'react';
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ handleAddTodo }) => {
	const [{ description }, handleInputChange, resetForm] = useForm({
		description: '',
	});

	const handleSubmit = (e) => {
		e.preventDefault();

		if (description.trim().length <= 1) return;

		const newTodo = {
			id: new Date().getTime(),
			desc: description,
			done: false,
		};

		handleAddTodo(newTodo);
		resetForm();
	};

	return (
		<>
			<h4>Add ToDo</h4>
			<hr />

			<form onSubmit={handleSubmit}>
				<input
					onChange={handleInputChange}
					value={description}
					className="form-control"
					type="text"
					name="description"
					placeholder="Do ..."
					autoComplete="off"
				/>
				<button type="submit" className="btn btn-success col-12 mt-3">
					Add ToDo
				</button>
			</form>
		</>
	);
};
