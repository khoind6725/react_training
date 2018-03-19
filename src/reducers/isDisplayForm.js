import * as types from './../constants/ActionTypes';

var initialState = false; // closeform

var myReducer = (state = initialState, action) => {
	switch(action.type) {
		case types.TOGGLE_FORM :
			state = !state;
			return state;
		case types.CLOSE_FORM :
			return false;
		case types.OPEN_FORM :
			return true;
		default: 
			return state;
	}
}

export default myReducer;