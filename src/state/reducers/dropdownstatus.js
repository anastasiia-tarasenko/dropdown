/* ++++++++++ --------------- IMPORTS --------------- ++++++++++ */
// libraries
import React from 'react';
// actions
import {
    SAMPLE_ACTION, // please update this and add more if necessary 
} from '../actions/dropdownstatus';



/* ========== ~~~~~~~~~~ DROPDOWN STATUS : REDUCER ~~~~~~~~~~ ========== */
// DEFAULT STATE
const defaultState = {
    // please fill this in
};


// REDUCER
export const dropdownStatus = (state = defaultState, action) => {
	let newState = Object.assign({}, state);
    switch (action.type) {
        case SAMPLE_ACTION:
        default:
            return newState;
    }
};
