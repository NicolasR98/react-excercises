import { renderHook } from '@testing-library/react-hooks';
import { useFetch } from '../../hooks/useFetch';

describe('Tests on useFetch hook', () => {
	test('should return default values', () => {
		const { result } = renderHook(() =>
			useFetch(`https://breakingbadapi.com/api/quotes/1`)
		);

		const { data, loading, error } = result?.current;

		expect(data).toBe(null);
		expect(loading).toBe(true);
		expect(error).toBe(null);
	});

	test('should return info from api', async () => {
		const { result, waitForNextUpdate } = renderHook(() =>
			useFetch(`https://breakingbadapi.com/api/quotes/1`)
		);
		await waitForNextUpdate({ timeout: 5000 });

		const { data, loading, error } = result?.current;

		expect(data.length).toBe(1);
		expect(loading).toBeFalsy();
		expect(error).toBe(null);
	});

	test('should handle an error', async () => {
		const { result, waitForNextUpdate } = renderHook(() =>
			useFetch(`https://reqres.in/apid/users?page=2`)
		);
		await waitForNextUpdate({ timeout: 5000 });

		const { data, error, loading } = result?.current;

		expect(loading).toBeFalsy();
		expect(data).toBe(null);
		expect(error).toBe('Could not load the info');
	});
});
