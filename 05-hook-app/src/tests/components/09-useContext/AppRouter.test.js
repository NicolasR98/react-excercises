import React from 'react';
import { mount } from 'enzyme';
import { UserContext } from '../../../components/09-useContext/UserContext';
import { AppRouter } from '../../../components/09-useContext/AppRouter';

describe('Tests on <AppRouter />', () => {
    const user = {
        id: 1,
        name: 'Nicolas',
    };

    const wrapper = mount(
        <UserContext.Provider value={{
            user
        }}>
            <AppRouter />
        </UserContext.Provider>
    );

    test('should display correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
