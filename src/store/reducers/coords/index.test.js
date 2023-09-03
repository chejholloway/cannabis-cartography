import { geoPaths } from '../../../constants/storePaths';
import * as actionTypes from '../../../constants/actionTypes';
import reducer, { getInitialState, actionReducers } from './index';
import * as reducers from './geo';

describe('store/reducers/coords/index', () => {
	beforeEach(jest.clearAllMocks);

	describe('getInitialState', () => {
		it('should return initial state', () => {
			const testState = getInitialState();
			expect(testState).toEqual({
				[geoPaths.locating()]: false,
				[geoPaths.location()]: null,
				[geoPaths.error()]: null
			});
		});
	});

	describe('actionReducers', () => {
		describe(actionTypes.REQUEST_COORDS, () => {
			it('should call requestGeoCoordsReducer', () => {
				const testReducer = actionReducers[actionTypes.REQUEST_COORDS];
				expect(testReducer).toBe(reducers.requestGeoCoordsReducer);
			});
		});
		describe(actionTypes.RECEIVE_COORDS, () => {
			it('should call receiveGeoCoordsReducer', () => {
				const testReducer = actionReducers[actionTypes.RECEIVE_COORDS];
				expect(testReducer).toBe(reducers.receiveGeoCoordsReducer);
			});
		});
		describe(actionTypes.REQUEST_COORDS_ERROR, () => {
			it('should call requestGeoCoordsErrorReducer', () => {
				const testReducer = actionReducers[actionTypes.REQUEST_COORDS_ERROR];
				expect(testReducer).toBe(reducers.requestGeoCoordsErrorReducer);
			});
		});
	});

	describe('reducer switch', () => {
		Object.keys(actionReducers).forEach((actionType) => {
			it(`should call correct reducer for ${actionType}`, () => {
				const testState = getInitialState();
				const testAction = {
					type: actionType,
					payload: {}
				};
				const testReducer = jest.spyOn(actionReducers, actionTypes[actionType]);
				expect(testReducer).not.toHaveBeenCalled();
				reducer(testState, testAction);
				expect(testReducer).toHaveBeenCalled();
			});
		});
		it('should not call any of its reducers for an unknown action', () => {
			const testState = getInitialState();
			const testAction = {
				type: 'UNKNOWN_ACTION_TYPE',
				payload: {}
			};
			reducer(testState, testAction);
			Object.keys(actionReducers).forEach((actionType) => {
				const testReducer = jest.spyOn(actionReducers, actionTypes[actionType]);
				expect(testReducer).not.toHaveBeenCalled();
			});
		});
	});
});
