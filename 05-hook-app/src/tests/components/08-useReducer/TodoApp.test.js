import React from 'react';
import { mount, shallow } from 'enzyme';
import { act } from '@testing-library/react';
import { demoTodos } from '../../fixtures/demoTodos,';
import { TodoApp } from '../../../components/08-useReducer/TodoApp';

describe('Tests on <TodoApp />', () => {
    const wrapper = shallow(<TodoApp />);

    //Set up localStorage mockup
    Storage.prototype.setItem = jest.fn(() => { });

    test('should display correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should add a todo', () => {
        //Can be used to simulate a component going through an unmount/mount lifecycle.
        const wrapper = mount(<TodoApp />);

        act(() => {
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[1]);
        });

        expect(wrapper.find('h1').text().trim()).toBe(`TodoApp (${demoTodos.length})`);
        expect(localStorage.setItem).toHaveBeenCalledTimes(2);
    });

    test('should delete a todo', () => {
        //1. Add a todo
        wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
        expect(wrapper.find('h1').text().trim()).toBe(`TodoApp (${1})`);

        //2. Delete todo
        wrapper.find('TodoList').prop('handleDelete')(demoTodos[0]?.id);
        expect(wrapper.find('h1').text().trim()).toBe(`TodoApp (${0})`);
    });
});
