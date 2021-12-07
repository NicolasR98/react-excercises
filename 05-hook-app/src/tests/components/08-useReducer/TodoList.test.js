import React from 'react';
import { shallow } from 'enzyme';
import { TodoList } from '../../../components/08-useReducer/TodoList';
import { demoTodos } from '../../fixtures/demoTodos,';

describe('Tests on <TodoList />', () => {
	const handleToggle = jest.fn();
	const handleDelete = jest.fn();

	const wrapper = shallow(
		<TodoList
			todos={demoTodos}
			handleToggle={handleToggle}
			handleDelete={handleDelete}
		/>
	);

	test('should display correctly', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('should have two valid <TodoListItem>', () => {
		expect(wrapper.find('TodoListItem').length).toBe(2);

		//Component has to have the respective functions
		expect(wrapper.find('TodoListItem').at(0).prop('handleDelete')).toEqual(
			expect.any(Function)
		);
		expect(wrapper.find('TodoListItem').at(0).prop('handleToggle')).toEqual(
			expect.any(Function)
		);
	});
});
