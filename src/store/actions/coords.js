import * as types from '../../constants/actionTypes';

export const requestCoordinatesAction = () => ({
	type: types.REQUEST_COORDS
});

export const receiveCoordinatesAction = (coords) => ({
	type: types.RECEIVE_COORDS,
	payload: {
		latitude: coords.latitude,
		longitude: coords.longitude
	}
});

export const requestCoordinatesErrorAction = (error) => ({
	type: types.REQUEST_COORDS_ERROR,
	payload: {
		error,
		message: 'Oops something went wrong'
	}
});
