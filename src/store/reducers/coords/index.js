import { geoPaths } from '../../../constants/storePaths';
import * as actionTypes from '../../../constants/actionTypes';
import * as reducers from './geo';

export const getInitialState = () => ({
	[geoPaths.locating()]: false,
	[geoPaths.location()]: null,
	[geoPaths.error()]: null
});

export const actionReducers = {
	[actionTypes.REQUEST_COORDS]: reducers.requestGeoCoordsReducer,
	[actionTypes.RECEIVE_COORDS]: reducers.receiveGeoCoordsReducer,
	[actionTypes.REQUEST_COORDS_ERROR]: reducers.requestGeoCoordsErrorReducer
};

export default (state = getInitialState(), action) => {
	const reducer = actionReducers[action.type];
	return reducer ? reducer(state, action) : state;
};
