import React from 'react';
import { shallow } from 'enzyme';
import { TodoAdd } from '../../../components/08-useReducer/TodoAdd';

describe('Tests on <TodoAdd />', () => {
	const handleAddTodo = jest.fn();

	let wrapper = shallow(<TodoAdd handleAddTodo={handleAddTodo} />);

	test('should display correctly', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('should not call `handleAddTodo`', () => {
		const formSubmit = wrapper.find('form').prop('onSubmit');

		formSubmit({ preventDefault() { } });

		expect(handleAddTodo).not.toHaveBeenCalled();
	});

	test('should call `handleAddTodo`', () => {
		const value = 'Learn React';

		wrapper.find('input').simulate('change', {
			target: {
				value,
				name: 'description'
			}
		});

		const formSubmit = wrapper.find('form').prop('onSubmit');
		formSubmit({ preventDefault() { } });

		expect(handleAddTodo).toHaveBeenCalledTimes(1);
		expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object));
		expect(handleAddTodo).toHaveBeenCalledWith({
			id: expect.any(Number),
			desc: value,
			done: false
		});

		expect(wrapper.find('input').prop('value')).toBe('');
	});

});
