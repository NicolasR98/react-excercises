import { act, renderHook } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('Tests on useForm hook', () => {
	const initialForm = {
		name: 'Nicolas',
		email: 'email@example.com',
	};

	test('Should return a default form', () => {
		const { result } = renderHook(() => useForm(initialForm));
		const { current } = result;
		const [values, handleInputChange, reset] = current;

		expect(values).toEqual(initialForm);
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');
	});

	test('should change the form value', () => {
		const { result } = renderHook(() => useForm(initialForm));
		const [, handleInputChange] = result?.current;

		act(() => {
			const target = {
				target: {
					name: 'name',
					value: 'Nico',
				},
			};

			handleInputChange(target);
		});

		const [values] = result.current;

		expect(values).toEqual({ ...initialForm, name: 'Nico' });
	});

	test('should reset the form', () => {
		const { result } = renderHook(() => useForm(initialForm));
		const [, handleInputChange, reset] = result?.current;

		act(() => {
			const target = {
				target: {
					name: 'name',
					value: 'Nico',
				},
			};

			handleInputChange(target);
			reset();
		});

		const [values] = result.current;

		expect(values).toEqual(initialForm);
	});
});
