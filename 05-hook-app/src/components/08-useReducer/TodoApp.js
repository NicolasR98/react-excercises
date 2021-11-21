import React, { useEffect, useReducer } from 'react';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';

const init = () => JSON.parse(localStorage.getItem('todos')) || [];

export const TodoApp = () => {
	const [todos, dispatch] = useReducer(todoReducer, [], init);

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

	const handleAddTodo = (newTodo) => {
		dispatch({
			type: 'add',
			payload: newTodo,
		});
	};

	const handleToggle = (todoId) => {
		dispatch({
			type: 'toggle',
			payload: todoId,
		});
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
					<TodoAdd handleAddTodo={handleAddTodo} />
				</div>
			</div>
		</div>
	);
};
