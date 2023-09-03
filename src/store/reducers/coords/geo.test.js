import get from 'lodash.get';
import set from 'lodash.set';
import mockCoords from '../../../__test__/mocks/coord-mock.json';
import mockError from '../../../__test__/mocks/error-mock.json';
import { geoPaths } from '../../../constants/storePaths';
import { getInitialState } from './index';
import * as reducers from './geo';

describe('store/reducers/coords', () => {
	beforeEach(jest.clearAllMocks);

	describe('requestGeoCoordsReducer', () => {
		it('should set locating to true', () => {
			const path = geoPaths.locating();
			const testState = getInitialState();
			expect(get(testState, path)).toEqual(false);
			const newState = reducers.requestGeoCoordsReducer(testState);
			expect(get(newState, path)).toEqual(true);
		});
	});

	describe('receiveGeoCoordsReducer', () => {
		const testAction = {
			payload: {
				latitude: mockCoords.latitude,
				longitude: mockCoords.longitude
			}
		};
		it('should set locating to false', () => {
			const path = geoPaths.locating();
			const testState = getInitialState();
			set(testState, path, true);
			expect(get(testState, path)).toEqual(true);
			const newState = reducers.receiveGeoCoordsReducer(testState, testAction);
			expect(get(newState, path)).toEqual(false);
		});
		it('should set location to action payload', () => {
			const path = geoPaths.location();
			const testState = getInitialState();
			set(testState, path, null);
			expect(get(testState, path)).toEqual(null);
			const newState = reducers.receiveGeoCoordsReducer(testState, testAction);
			expect(get(newState, path)).toEqual(testAction.payload);
		});
	});

	describe('requestGeoCoordsErrorReducer', () => {
		const testAction = {
			payload: {
				error: mockError
			}
		};
		it('should set locating to false', () => {
			const path = geoPaths.locating();
			const testState = getInitialState();
			set(testState, path, true);
			expect(get(testState, path)).toEqual(true);
			const newState = reducers.requestGeoCoordsErrorReducer(testState, testAction);
			expect(get(newState, path)).toEqual(false);
		});
		it('should set error to action payload', () => {
			const path = geoPaths.error();
			const testState = getInitialState();
			set(testState, path, null);
			expect(get(testState, path)).toEqual(null);
			const newState = reducers.requestGeoCoordsErrorReducer(testState, testAction);
			expect(get(newState, path)).toEqual(testAction.payload.error);
		});
	});
});
