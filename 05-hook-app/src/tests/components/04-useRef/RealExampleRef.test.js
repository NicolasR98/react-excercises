import { shallow } from 'enzyme';
import React from 'react';
import { RealExampleRef } from '../../../components/04-useRef/RealExampleRef';

describe('Tests on <RealExampleRef />', () => {
	const wrapper = shallow(<RealExampleRef />);

	test('should display correctly', () => {
		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find('MultipleCustomHooks').exists()).toBeFalsy();
	});

	test('should show <MultipleCustomHooks /> component when click', () => {
		wrapper.find('button').simulate('click');

		expect(wrapper.find('MultipleCustomHooks').exists()).toBeTruthy();
	});
});
