import React from 'react'
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk' 

import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import { activeNote, startNewNote } from '../../../actions/notes';
import { NoteScreen } from '../../../components/notes/NoteScreen';

jest.mock('../../../actions/notes', () => ({
    activeNote: jest.fn()
}));


const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
    auth: {
        uid: '1',
        name: 'Adriana'
    },
    ui: {
        loading: false,
        msgError: null
    },
    notes: {
        notes: [],
        active: { 
                    id: 1234,
                    title: 'Hola',
                    body: 'mundo',
                    date: 0
                }
    }
}

let store = mockStore(initState);
store.dispatch = jest.fn();

const wrapper = mount( 
    <Provider store={ store }>
        <MemoryRouter>
            <NoteScreen />
        </MemoryRouter>
    </Provider>
)


describe('Test in <NoteScreen />', () => {
    
    test('should show correctly', () => {       
        expect( wrapper ).toMatchSnapshot();  
    });

    test('should dipatch the arguments', () => {
        wrapper.find('input[name="title"]').simulate('change',{
            target:{
                name: 'title',
                value: 'Hola de nuevo'
            }
        });

        expect( activeNote ).toHaveBeenLastCalledWith(
            1234,
            {
                body: 'mundo',
                title: 'Hola de nuevo',
                id: 1234,
                date: 0
            }
        );
    })
    
    
})
