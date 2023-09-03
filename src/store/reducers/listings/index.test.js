import { listingsPaths } from '../../../constants/storePaths';
import * as actionTypes from '../../../constants/actionTypes';
import reducer, { getInitialState, actionReducers } from './index';
import * as reducers from './listings';

describe('store/reducers/listings/index', () => {

  beforeEach(jest.clearAllMocks);

  describe('getInitialState', () => {
    it('should return initial state', () => {
      const testState = getInitialState();
      expect(testState).toEqual({
        [listingsPaths.fetching()]: false,
        [listingsPaths.location()]: null,
        [listingsPaths.regions()]: null,
        [listingsPaths.details()]: {},
        [listingsPaths.error()]: null,
      });
    });
  });

  describe('actionReducers', () => {
    describe(actionTypes.REQUEST_WEEDMAPS_LISTINGS, () => {
      it('should call requestWeedmapsListingsReducer', () => {
        const testReducer = actionReducers[actionTypes.REQUEST_WEEDMAPS_LISTINGS];
        expect(testReducer).toBe(reducers.requestWeedmapsListingsReducer);
      });
    });
    describe(actionTypes.RECEIVE_WEEDMAPS_LISTINGS, () => {
      it('should call receiveWeedmapsListingsReducer', () => {
        const testReducer = actionReducers[actionTypes.RECEIVE_WEEDMAPS_LISTINGS];
        expect(testReducer).toBe(reducers.receiveWeedmapsListingsReducer);
      });
    });
    describe(actionTypes.REQUEST_WEEDMAPS_LISTINGS_ERROR, () => {
      it('should call requestWeedmapsListingsErrorReducer', () => {
        const testReducer = actionReducers[actionTypes.REQUEST_WEEDMAPS_LISTINGS_ERROR];
        expect(testReducer).toBe(reducers.requestWeedmapsListingsErrorReducer);
      });
    });

    describe(actionTypes.REQUEST_WEEDMAPS_LISTING_DETAILS, () => {
      it('should call requestWeedmapsListingDetailsReducer', () => {
        const testReducer = actionReducers[actionTypes.REQUEST_WEEDMAPS_LISTING_DETAILS];
        expect(testReducer).toBe(reducers.requestWeedmapsListingDetailsReducer);
      });
    });
    describe(actionTypes.RECEIVE_WEEDMAPS_LISTING_DETAILS, () => {
      it('should call receiveWeedmapsListingDetailsReducer', () => {
        const testReducer = actionReducers[actionTypes.RECEIVE_WEEDMAPS_LISTING_DETAILS];
        expect(testReducer).toBe(reducers.receiveWeedmapsListingDetailsReducer);
      });
    });
    describe(actionTypes.REQUEST_WEEDMAPS_LISTING_DETAILS_ERROR, () => {
      it('should call requestWeedmapsListingDetailsErrorReducer', () => {
        const testReducer = actionReducers[actionTypes.REQUEST_WEEDMAPS_LISTING_DETAILS_ERROR];
        expect(testReducer).toBe(reducers.requestWeedmapsListingDetailsErrorReducer);
      });
    });
  });

  describe('reducer switch', () => {
    Object.keys(actionReducers).forEach(actionType => {
      it(`should call correct reducer for ${actionType}`, () => {
        const testState = getInitialState();
        const testAction = {
          type: actionType,
          payload: {},
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
        payload: {},
      };
      reducer(testState, testAction);
      Object.keys(actionReducers).forEach(actionType => {
        const testReducer = jest.spyOn(actionReducers, actionTypes[actionType]);
        expect(testReducer).not.toHaveBeenCalled();
      });
    });
  });
});
