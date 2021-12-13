import React from 'react';
import { mount } from 'enzyme';
import { LoginScreen } from '../../../components/09-useContext/LoginScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Tests on <LoginScreen />', () => {
    const setUser = jest.fn();

    const wrapper = mount(
        <UserContext.Provider value={{
            setUser
        }}>
            <LoginScreen />
        </UserContext.Provider>
    );

    test('should display correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should execute `setUser` with the expected argument', () => {
        wrapper.find('button').simulate('click');

        expect(setUser).toHaveBeenCalledTimes(1);
        expect(setUser).toHaveBeenCalledWith({
            id: 1234,
            name: 'Nicolas',
        });
    });
});
