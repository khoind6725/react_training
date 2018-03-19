import * as types from './../constants/ActionTypes';
import _ from 'lodash';

var data = JSON.parse(localStorage.getItem('tasks'));
var initialState = data ? data : [];

var myReducer = (state = initialState, action) => {
	switch(action.type) {
		case types.LIST_ALL:
			return state
		case types.SAVE_TASK:
			var task = {
				id : action.task.id,
				name: action.task.name,
				status: action.task.status
			}
			if (!task.id) {
				task.id = generateId()
				state.push(task)
			}
			else {
				let index = _.findIndex(state, (task) => {
					return task.id === action.task.id
				})
				if ( index !== -1 ) {
					state[index] = task
			    }
			}
			localStorage.setItem('tasks', JSON.stringify(state))
			return [...state]
		case types.UPDATE_STATUS_TASK:
			{
				let index = _.findIndex(state, (task) => {
					return task.id === action.id
				})
			    if ( index !== -1 ) {
					state[index] = {
						...state[index],
						status: !state[index].status
					}
			      	localStorage.setItem('tasks', JSON.stringify(state))
			    }
				return [...state]
			}
		case types.DELETE_TASK:
			{
				let index = _.findIndex(state, (task) => {
					return task.id === action.id
				})
				if ( index !== -1 ) {
					state.splice(index, 1)
			      	localStorage.setItem('tasks', JSON.stringify(state))
				}
				return [...state]
			}
		default:
			return state
	}
}

var s4 = () => {
	return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
}

var generateId = () => {
	return s4() + s4() + '-' + s4() + s4() + '-' + s4() + s4() + '-' + s4() + s4() + '-' + s4() + s4();
}

export default myReducer;