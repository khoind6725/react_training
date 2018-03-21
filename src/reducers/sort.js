import * as types from './../constants/ActionTypes';

var initialState = {
	by: 'name',
	value: 1
};

var myReducer = (state = initialState, action) => {
	switch(action.type) {
		case types.SORT :
			return {
				'by' : action.by,
				'value' : action.value
			}
		default: 
			return state
	}
}

export default myReducer;