import React from 'react';
import { mount } from 'enzyme';
import { HomeScreen } from '../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';


describe('Tests on <HomeScreen />', () => {
    const user = {
        name: 'Nicolas',
        email: 'a@a.com',
    };

    const wrapper = mount(
        <UserContext.Provider value={{
            user
        }}>
            <HomeScreen />
        </UserContext.Provider>
    );

    test('should display correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
