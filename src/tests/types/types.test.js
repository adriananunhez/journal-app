import React from 'react'
import { types } from '../../types/types'



describe('Test in object types', () => {
    
    test('should evaluar que tenga este cargado', () => {
        
        expect( types ).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout',

            uiSetError: '[UI] Set error',
            uiRemoveError: '[UI] Remove error',

            uiStartLoading: '[UI] Start Loading',
            uiFinishLoading: '[UI] Finish Loading',

            notesAddNew: '[Notes] New note',
            notesActive: '[Notes] Set active note',
            notesLoad: '[Notes] Load note',
            notesUpdated: '[Notes] Updated note saved',
            notesFileUrl: '[Notes] Updated img url',
            notesDelete: '[Notes]  Delete note',
            notesLogoutCleaning: '[Notes] Logout cleaning',
        })
    })
    
})

