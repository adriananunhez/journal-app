import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from 'react-router-dom';
import { firebase } from '../firebase/firebase-config'

import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../components/journal/JournalScreen';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { startLoadingNotes } from '../actions/notes';


export const AppRouter = () => {

    const dispatch = useDispatch();
    const [ checking, setChecking ]= useState( true );
    const [ isLoggedIn, setIsLoggedIn ] = useState( false );

    useEffect(() => {
        //Cada vez que se recarga la pag se mantiene los datos de auth
        firebase.auth().onAuthStateChanged( async(user) =>{

            if( user?.uid ){//si el user es distinto de null, obtiene el uid
                dispatch( login( user.uid, user.displayName ) )
                setIsLoggedIn( true );
                dispatch( startLoadingNotes( user.uid ) );

            } else {
                setIsLoggedIn( false );
            }

            setChecking( false );
        });


    }, [dispatch, setChecking, setIsLoggedIn ])

    if( checking ){
        return(
            <h1>Wait...</h1>
        )
    }

    return (
        <Router>
            <div>
                <Switch>

                    <PrivateRoute 
                        exact
                        path="/"
                        isAuthenticated={ isLoggedIn } 
                        component={ JournalScreen }
                        />
                    <PublicRoute 
                        path="/auth"
                        isAuthenticated={ isLoggedIn } 
                        component={ AuthRouter }
                        />

                    <Redirect to="/auth/login" />


                </Switch>
            </div>
        </Router>
    )
}
