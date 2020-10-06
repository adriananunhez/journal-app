import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk' 

import '@testing-library/jest-dom';

import { login, logout, startLoginEmailPassword, startLogout } from '../../actions/auth'
import { types } from '../../types/types'

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {}

let store = mockStore(initState);

describe('Test in auth actions', () => {
    
    beforeEach(() => {
        store = mockStore(initState);
    })

    test('should login y logout create action respect', () => {
        

        const actionLogin = login('hK9f0QS4XTZyOT2Wjcva4zt4FO62','Adiana');
        expect( actionLogin ).toEqual({
            type: types.login,
            payload: {
                uid:'hK9f0QS4XTZyOT2Wjcva4zt4FO62',
                displayName: 'Adiana'
            }
        });

        const actionLogout = logout();
        expect( actionLogout ).toEqual({
            type: types.logout
        })
    });

    test('should do logout', async() => {
        
        await store.dispatch( startLogout() );

        const actions = store.getActions();
        
        expect( actions[0] ).toEqual({
            type: types.logout
        });

        expect( actions[1] ).toEqual({
            type: types.notesLogoutCleaning
        });

    });

    test('should startLoginEmailPassword init', async() => {
         await store.dispatch( startLoginEmailPassword('test@testing.com','123456') );
        
         const actions = store.getActions();

        expect( actions[1] ).toEqual({
            type: types.login,
            payload: {
                uid: 'zhDMI0BlHyNrtJIJomq0rGDLheF2',
                displayName: null
            }
        })
    });

    
    
    
    
})
