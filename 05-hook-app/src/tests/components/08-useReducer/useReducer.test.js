import { todoReducer } from '../../../components/08-useReducer/todoReducer';
import { demoTodos, newTodo } from '../../fixtures/demoTodos,';

describe('Tests on useReducer', () => {
	test('should return the default state', () => {
		const state = todoReducer(demoTodos, {});

		expect(state).toEqual(demoTodos);
	});

	test('should add a new todo', () => {
		const expected = [...demoTodos, newTodo];

		const action = {
			type: 'add',
			payload: newTodo,
		};

		const state = todoReducer(demoTodos, action);

		expect(state.length).toBe(3);
		expect(state).toEqual(expected);
	});

	test('should delete a todo', () => {
		const expected = demoTodos;

		const initialState = [...demoTodos, newTodo];

		const targetId = newTodo?.id;

		const action = {
			type: 'delete',
			payload: targetId,
		};

		const state = todoReducer(initialState, action);

		expect(state.length).toBe(2);
		expect(state).toEqual(expected);
	});

	test('should toggle a todo', () => {
		const { id: targetId } = demoTodos[0];

		const action = {
			type: 'toggle',
			payload: targetId,
		};

		const state = todoReducer(demoTodos, action);

		expect(state.length).toBe(2);
		expect(state[0]?.done).toBeTruthy();
		expect(state[1]).toEqual(demoTodos[1]);
	});
});
