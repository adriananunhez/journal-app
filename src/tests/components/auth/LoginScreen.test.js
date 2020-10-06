import React from 'react'

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk' 

import { mount } from 'enzyme'
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import { LoginScreen } from '../../../components/auth/LoginScreen'
import { startGoogleLogin, startLoginEmailPassword } from '../../../actions/auth';


jest.mock('../../../actions/auth', () => ({
    startGoogleLogin: jest.fn(),
    startLoginEmailPassword: jest.fn()
}))


const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
    auth: {},
    ui: {
        loading: false,
        msgError: null
    }
}

let store = mockStore(initState);
store.dispatch = jest.fn();


const wrapper = mount( 
    <Provider store={ store }>
        <MemoryRouter>
            <LoginScreen />     
        </MemoryRouter>
    </Provider>
)


describe('Test in LoginScreen', () => {
    
    beforeEach(() => {
        store = mockStore(initState);
        jest.clearAllMocks();
    })

    
    test('should show LoginScreen', () => {
        expect( wrapper ).toMatchSnapshot();
    })

    test('should dispatch StartLoginGoogle ', () => {
        
        wrapper.find('.google-btn').prop('onClick')();

        expect( startGoogleLogin ).toHaveBeenCalled();
    })
    
    
    test('should dispatch handleLogin', () => {
        
        wrapper.find('form').prop('onSubmit')({ preventDefault(){} });


        expect( startLoginEmailPassword ).toHaveBeenCalledWith('adriana@gmai.com','123456');


    })
    

})
