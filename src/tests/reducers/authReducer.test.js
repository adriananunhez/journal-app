const { authReducer } = require("../../reducers/authReducer");
const { types } = require("../../types/types");


describe('Test in authReducer', () => {
    

    test('should do login', () => {

        const initState = {};
        const action = {
            type: types.login,
            payload: {
                uid: 'abc',
                displayName: 'Adriana'
            }
        };

        const state = authReducer( initState, action );

        expect( state ).toEqual({
            uid: 'abc',
            name: 'Adriana'
        })
    })
    
})
