import mockCoords from '../../__test__/mocks/coord-mock.json';
import mockError from '../../__test__/mocks/error-mock.json';
import * as actions from '../actions/coords';
import * as thunks from './geo';

const mockDispatch = jest.fn();

const mockService = {
	fetchCoordinates: () => Promise.resolve(mockCoords)
};

const mockServiceError = {
	fetchCoordinates: () => Promise.reject(mockError)
};

const actionSpies = {
	requestCoordinatesAction: jest.spyOn(actions, 'requestCoordinatesAction'),
	receiveCoordinatesAction: jest.spyOn(actions, 'receiveCoordinatesAction'),
	requestCoordinatesErrorAction: jest.spyOn(actions, 'requestCoordinatesErrorAction')
};

describe('store/thunks/geo', () => {
	beforeEach(jest.clearAllMocks);

	describe('fetchCoordinates', () => {
		it('should dispatch requestCoordinatesAction', () => {
			expect(mockDispatch).not.toHaveBeenCalled();
			expect(actionSpies.requestCoordinatesAction).not.toHaveBeenCalled();
			thunks.fetchCoordinates(mockService)(mockDispatch);
			expect(mockDispatch).toHaveBeenCalled();
			expect(actionSpies.requestCoordinatesAction).toHaveBeenCalled();
			expect(mockDispatch).toHaveBeenNthCalledWith(1, actions.requestCoordinatesAction());
		});
		it('should call geoService.fetchCoordinates', () => {
			const fetchCoordinates = jest.spyOn(mockService, 'fetchCoordinates');
			expect(fetchCoordinates).not.toHaveBeenCalled();
			thunks.fetchCoordinates(mockService)(mockDispatch);
			expect(fetchCoordinates).toHaveBeenCalled();
		});
		it('should dispatch receiveCoordinatesAction on success', async () => {
			expect(mockDispatch).not.toHaveBeenCalled();
			expect(actionSpies.receiveCoordinatesAction).not.toHaveBeenCalled();
			await thunks.fetchCoordinates(mockService)(mockDispatch);
			expect(mockDispatch).toHaveBeenCalled();
			expect(actionSpies.receiveCoordinatesAction).toHaveBeenCalled();
			expect(actionSpies.receiveCoordinatesAction).toHaveBeenCalledWith(mockCoords);
			expect(mockDispatch).toHaveBeenNthCalledWith(2, actions.receiveCoordinatesAction(mockCoords));
		});
		it('should dispatch requestCoordinatesErrorAction on fail', async () => {
			expect(mockDispatch).not.toHaveBeenCalled();
			expect(actionSpies.requestCoordinatesErrorAction).not.toHaveBeenCalled();
			await thunks.fetchCoordinates(mockServiceError)(mockDispatch);
			expect(mockDispatch).toHaveBeenCalled();
			expect(actionSpies.requestCoordinatesErrorAction).toHaveBeenCalled();
			expect(actionSpies.requestCoordinatesErrorAction).toHaveBeenCalledWith(mockError);
			expect(mockDispatch).toHaveBeenNthCalledWith(2, actions.requestCoordinatesErrorAction(mockError));
		});
	});
});
