import React from 'react'
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk' 

import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import { activeNote } from '../../../actions/notes';
import { JournalEntry } from '../../../components/journal/JournalEntry';


jest.mock('../../../actions/notes', () => ({
    activeNote: jest.fn()
}));


const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {}

let store = mockStore(initState);
store.dispatch = jest.fn();

const nota = {
    id: 10,
    date: 0,
    title: 'Hola',
    body: 'Mundo',
    url: 'https://algunlugar.com/foto.jpg'
};

const wrapper = mount( 
    <Provider store={ store }>
        <MemoryRouter>
            <JournalEntry { ...nota }/>
        </MemoryRouter>
    </Provider>
)



describe('test in <JournalScreen />', () => {
    
    test('should show correctly', () => {
        
        expect( wrapper ).toMatchSnapshot();
    });

    test('should click in the note', () => {
        
        wrapper.find('.journal__entry').prop('onClick')();

        expect( store.dispatch ).toHaveBeenCalledWith(
            activeNote( nota.id, { ...nota })
        );
    })
    
    
})
