import { combineReducers } from 'redux';

const INITIAL_STATE = [
	{
		title: '',
		desc: 'Alice',
		validity: '',
		dateAdded:'26-12-2020'	
	}
];

const offerReducer = (state = INITIAL_STATE,action)=>{
	switch(action.type){
		case 'ADD_OFFER':
			if(action.payload)
			{
				let newstate=state;
				newstate.push(action.payload);
				return newstate;
			}
			else
				return state;
		case 'SHOW_OFFER':
			return state;
		default:
			return state;
	}
}

export default combineReducers(
	{
		offers:offerReducer
	}
);