import React from 'react';
import PropTypes from 'prop-types';
import { TodoListItem } from './TodoListItem';

export const TodoList = ({ todos, handleToggle, handleDelete }) => {
	return (
		<ul className="list-group list-group-flush">
			{todos.map((todo, index) => (
				<TodoListItem
					key={todo?.id}
					todo={todo}
					index={index}
					handleDelete={handleDelete}
					handleToggle={handleToggle}
				/>
			))}
		</ul>
	);
};

TodoList.propTypes = {
	todos: PropTypes.arrayOf(PropTypes.object),
	handleToggle: PropTypes.func,
	handleDelete: PropTypes.func,
};
