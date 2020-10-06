const { setError,removeError,startLoading, finishLoading } = require("../../actions/ui");
const { types } = require("../../types/types");


describe('Test in ui-actions', () => {
    
    test('should all actions to run', () => {
      
        const action = setError('HELP!');

        expect( action ).toEqual({
            type: types.uiSetError,
            payload: 'HELP!'
        });

        const removeErrorAction = removeError();
        const startLoadingAction = startLoading();
        const finishLoadingAction = finishLoading();

        expect(removeErrorAction).toEqual({
            type: types.uiRemoveError
        });

        expect(startLoadingAction).toEqual({
            type: types.uiStartLoading
        });

        expect(finishLoadingAction).toEqual({
            type: types.uiFinishLoading
        });

    })
    
})
