import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';
import {
    SET_ALERT,
    REMOVE_ALERT
} from '../types';

const AlertState = props => {
    // As we only have one state we can directly assign a null value to initialState instead of putting { alert: null }
    const initialState = null;

    const [state, dispatch] = useReducer(AlertReducer, initialState);

    // Set Alert
    const setAlert = (msg, type) => {
        dispatch({ 
            type: SET_ALERT,
            payload: { msg, type } 
        });

        setTimeout(() => dispatch({ type: REMOVE_ALERT }), 5000);
    };

    return <AlertContext.Provider 
        value = {{
            alert: state,
            setAlert,
        }} >
            {props.children}
    </AlertContext.Provider>
};

export default AlertState;