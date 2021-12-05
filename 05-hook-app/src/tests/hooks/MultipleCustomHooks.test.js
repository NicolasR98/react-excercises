import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import React from 'react';
import { MultipleCustomHooks } from '../../components/03-examples/MultipleCustomHooks';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';

jest.mock('../../hooks/useFetch');
jest.mock('../../hooks/useCounter');

describe('Tests on <MultipleCustomsHooks />', () => {
	beforeEach(() => {
		useCounter.mockReturnValue({
			counter: 1,
			increment: () => {},
		});
	});

	test('should display correctly', () => {
		useFetch.mockReturnValue({
			data: null,
			loading: true,
			error: null,
		});

		const { container } = render(<MultipleCustomHooks />);
		expect(container).toMatchSnapshot();
	});

	test('should display the info', () => {
		useFetch.mockReturnValue({
			data: [
				{
					author: 'Nicolas',
					quote: 'Hello world!',
				},
			],
		});

		const wrapper = shallow(<MultipleCustomHooks />);
		expect(wrapper.find('.alert').exists()).toBeFalsy();
		expect(wrapper.find('p').text().trim()).toBe('Hello world!');
		expect(wrapper.find('footer').text().trim()).toBe('Nicolas');
	});
});
