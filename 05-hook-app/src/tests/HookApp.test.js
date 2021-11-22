import React from 'react';
import { shallow } from 'enzyme';
import { HookApp } from '../HookApp';

describe('Tests on <HookApp />', () => {
	let wrapper = shallow(<HookApp />);

	beforeEach(() => {
		jest.clearAllMocks();
		wrapper = shallow(<HookApp />);
	});

	test('Component should render without crashing', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
