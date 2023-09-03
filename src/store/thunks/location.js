import { requestCoordinatesAction, requestCoordinatesErrorAction, receiveCoordinatesAction } from '../actions/coords';

export const fetchCoordinates = (service) => (dispatch) => {
	dispatch(requestCoordinatesAction());
	service
		.fetchCoordinates()
		.then(
			(response) => dispatch(receiveCoordinatesAction(response)),
			(error) => dispatch(requestCoordinatesErrorAction(error))
		);
};
