import React, { useEffect, useReducer } from 'react';
import { useForm } from '../../hooks/useForm';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';

const init = () => JSON.parse(localStorage.getItem('todos')) || [];

export const TodoApp = () => {
	const [todos, dispatch] = useReducer(todoReducer, [], init);

	const [{ description }, handleInputChange, resetForm] = useForm({
		description: '',
	});

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	const handleDelete = (todoId) => {
		const action = {
			type: 'delete',
			payload: todoId,
		};
		dispatch(action);
	};

	const handleToggle = (todoId) => {
		dispatch({
			type: 'toggle',
			payload: todoId,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (description.trim().length <= 1) return;

		const newTodo = {
			id: new Date().getTime(),
			desc: description,
			done: false,
		};

		const action = {
			type: 'add',
			payload: newTodo,
		};

		dispatch(action);
		resetForm();
	};

	return (
		<div>
			<h1>TodoApp ({todos.length})</h1>
			<hr />

			<div className="row">
				<div className="col-7">
					<TodoList
						todos={todos}
						handleToggle={handleToggle}
						handleDelete={handleDelete}
					/>
				</div>
				<div className="col-5">
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
				</div>
			</div>
		</div>
	);
};
