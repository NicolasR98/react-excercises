import { act, renderHook } from '@testing-library/react-hooks';
import { useCounter } from '../../hooks/useCounter';

describe('Tests on useCounter', () => {
	test('useCounter - should return valid default values', () => {
		const { result } = renderHook(() => useCounter());

		expect(result.current.counter).toBe(1);
		expect(typeof result.current.increment).toBe('function');
		expect(typeof result.current.decrement).toBe('function');
		expect(typeof result.current.reset).toBe('function');
	});

	test('userCounter - should return 100 as counter value', () => {
		const counterValue = 100;

		const { result } = renderHook(() => useCounter(counterValue));

		expect(result.current.counter).toBe(counterValue);
	});

	test('userCounter - should increment 1', () => {
		const counterValue = 100;

		const expected = counterValue + 1;

		const { result } = renderHook(() => useCounter(counterValue));
		const { increment } = result.current;

		act(() => {
			increment();
		});

		const { counter } = result.current;

		expect(counter).toBe(expected);
	});

	test('userCounter - should decrement 1', () => {
		const counterValue = 100;

		const expected = counterValue - 1;

		const { result } = renderHook(() => useCounter(counterValue));
		const { decrement } = result.current;

		act(() => {
			decrement();
		});

		const { counter } = result.current;

		expect(counter).toBe(expected);
	});

	test("userCounter - should reset the counter value to it's initial state", () => {
		const counterValue = 100;

		const expected = counterValue;

		const { result } = renderHook(() => useCounter(counterValue));
		const { reset } = result.current;

		act(() => {
			reset();
		});

		const { counter } = result.current;

		expect(counter).toBe(expected);
	});
});
