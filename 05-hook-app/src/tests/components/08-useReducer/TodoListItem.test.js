import React from 'react';
import { shallow } from 'enzyme';
import { TodoListItem } from '../../../components/08-useReducer/TodoListItem';
import { demoTodos } from '../../fixtures/demoTodos,';

describe('Tests on <TodoListItem />', () => {
	const [todo] = demoTodos;

	const handleToggle = jest.fn();
	const handleDelete = jest.fn();

	const wrapper = shallow(
		<TodoListItem
			todo={todo}
			index={0}
			handleToggle={handleToggle}
			handleDelete={handleDelete}
		/>
	);

	test('should display correctly', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test("should call the function 'handleDelete'", () => {
		//find and click on 'deleteButton'
		wrapper.find('button').simulate('click');

		expect(handleDelete).toHaveBeenCalledTimes(1);
		expect(handleDelete).toHaveBeenCalledWith(todo?.id);
	});

	test("should call the function 'handleToggle'", () => {
		//find and click on 'todo'
		wrapper.find('p').simulate('click');

		expect(handleToggle).toHaveBeenCalledTimes(1);
		expect(handleToggle).toHaveBeenCalledWith(todo?.id);
	});

	test('should correctly display the text', () => {
		const p = wrapper.find('p');

		expect(p.text().trim()).toBe(`1. ${todo.desc}`);
	});

	test('should have the class `complete` if `TODO.done = true`', () => {
		const newTodo = { ...todo, done: true };

		const wrapper = shallow(
			<TodoListItem
				todo={newTodo}
				index={0}
				handleToggle={handleToggle}
				handleDelete={handleDelete}
			/>
		);

        expect(wrapper.find('p').hasClass('complete')).toBeTruthy();
	});
});
