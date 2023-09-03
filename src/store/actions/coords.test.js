import * as types from '../../constants/actionTypes';

import mockCoords from '../../__test__/mocks/coord-mock.json';
import mockError from '../../__test__/mocks/error-mock.json';

import * as actions from './coords';

describe('store/actions/coords', () => {
	describe('requestCoordinatesAction', () => {
		const testAction = actions.requestCoordinatesAction();
		it(`should create action of type ${types.REQUEST_COORDS}`, () => {
			expect(testAction.type).toEqual(types.REQUEST_COORDS);
		});
	});

	describe('receiveCoordinatesAction', () => {
		const testAction = actions.receiveCoordinatesAction(mockCoords);
		it(`should create action of type ${types.RECEIVE_COORDS}`, () => {
			expect(testAction.type).toEqual(types.RECEIVE_COORDS);
		});
		it(`should create action with payload of latitude`, () => {
			expect(testAction.payload.latitude).toEqual(mockCoords.latitude);
		});
		it(`should create action with payload of longitude`, () => {
			expect(testAction.payload.longitude).toEqual(mockCoords.longitude);
		});
	});

	describe('requestCoordinatesErrorAction', () => {
		const testAction = actions.requestCoordinatesErrorAction(mockError);
		it(`should create action of type ${types.REQUEST_COORDS_ERROR}`, () => {
			expect(testAction.type).toEqual(types.REQUEST_COORDS_ERROR);
		});
		it(`should create action with payload of error`, () => {
			expect(testAction.payload.error).toEqual(mockError);
		});
		it(`should create action with payload of message`, () => {
			expect(testAction.payload.message).toEqual('Oops something went wrong');
		});
	});
});
