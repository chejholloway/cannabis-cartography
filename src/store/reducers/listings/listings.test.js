import get from 'lodash.get';
import set from 'lodash.set';
import mockLocation from '../../../__test__/mocks/location-mock.json';
import mockListing from '../../../__test__/mocks/listing-mock.json';
import mockError from '../../../__test__/mocks/error-mock.json';
import { listingsPaths } from '../../../constants/storePaths';
import { getInitialState } from './index';
import * as reducers from './listings';

describe('store/reducers/listings', () => {

  beforeEach(jest.clearAllMocks);

  describe('requestWeedmapsListingsReducer', () => {
    it('should set fetching to true', () => {
      const path = listingsPaths.fetching();
      const testState = getInitialState();
      expect(get(testState, path)).toEqual(false);
      const newState = reducers.requestWeedmapsListingsReducer(testState);
      expect(get(newState, path)).toEqual(true);
    });
  });

  describe('receiveWeedmapsListingsReducer', () => {
    const testAction = {
      payload: {
        location: mockLocation.data.location,
        regions: mockLocation.data.regions,
      },
    };
    it('should set fetching to false', () => {
      const path = listingsPaths.fetching();
      const testState = getInitialState();
      set(testState, path, true);
      expect(get(testState, path)).toEqual(true);
      const newState = reducers.receiveWeedmapsListingsReducer(testState, testAction);
      expect(get(newState, path)).toEqual(false);
    });
    it('should set location to action payload location', () => {
      const path = listingsPaths.location();
      const testState = getInitialState();
      set(testState, path, null);
      expect(get(testState, path)).toEqual(null);
      const newState = reducers.receiveWeedmapsListingsReducer(testState, testAction);
      expect(get(newState, path)).toEqual(testAction.payload.location);
    });
  });

  describe('requestWeedmapsListingsErrorReducer', () => {
    const testAction = {
      payload: {
        error: mockError,
      },
    };
    it('should set fetching to false', () => {
      const path = listingsPaths.fetching();
      const testState = getInitialState();
      set(testState, path, true);
      expect(get(testState, path)).toEqual(true);
      const newState = reducers.requestWeedmapsListingsErrorReducer(testState, testAction);
      expect(get(newState, path)).toEqual(false);
    });
    it('should set error to action payload', () => {
      const path = listingsPaths.error();
      const testState = getInitialState();
      set(testState, path, null);
      expect(get(testState, path)).toEqual(null);
      const newState = reducers.requestWeedmapsListingsErrorReducer(testState, testAction);
      expect(get(newState, path)).toEqual(testAction.payload.error);
    });
  });

  describe('requestWeedmapsListingDetailsReducer', () => {
    it('should set fetching to true', () => {
      const path = listingsPaths.fetching();
      const testState = getInitialState();
      expect(get(testState, path)).toEqual(false);
      const newState = reducers.requestWeedmapsListingDetailsReducer(testState);
      expect(get(newState, path)).toEqual(true);
    });
  });

  describe('receiveWeedmapsListingDetailsReducer', () => {
    const testAction = {
      payload: {
        listing: mockListing.data.listing,
      },
    };
    const badPayloadAction = {
      payload: {},
    };
    it('should set fetching to false', () => {
      const path = listingsPaths.fetching();
      const testState = getInitialState();
      set(testState, path, true);
      expect(get(testState, path)).toEqual(true);
      const newState = reducers.receiveWeedmapsListingDetailsReducer(testState, testAction);
      expect(get(newState, path)).toEqual(false);
    });
    it('should set details to action payload listing', () => {
      const { wmid, slug } = testAction.payload.listing;
      const detailsKey = `${wmid}-${slug}`;
      const path = listingsPaths.details(detailsKey);
      const testState = getInitialState();
      expect(get(testState, path)).toBe(undefined);
      const newState = reducers.receiveWeedmapsListingDetailsReducer(testState, testAction);
      expect(get(newState, path)).toEqual(testAction.payload.listing);
    });
    it('should set error to null', () => {
      const path = listingsPaths.error();
      const testState = getInitialState();
      set(testState, path, mockError);
      expect(get(testState, path)).toEqual(mockError);
      const newState = reducers.receiveWeedmapsListingDetailsReducer(testState, testAction);
      expect(get(newState, path)).toEqual(null);
    });
    describe('invalid payload', () => {
      it('should set fetching to false', () => {
        const path = listingsPaths.fetching();
        const testState = getInitialState();
        set(testState, path, true);
        expect(get(testState, path)).toEqual(true);
        const newState = reducers.receiveWeedmapsListingDetailsReducer(testState, badPayloadAction);
        expect(get(newState, path)).toEqual(false);
      });
      it('should set error to null', () => {
        const path = listingsPaths.error();
        const testState = getInitialState();
        set(testState, path, null);
        expect(get(testState, path)).toEqual(null);
        const newState = reducers.receiveWeedmapsListingDetailsReducer(testState, badPayloadAction);
        expect(get(newState, path)).not.toEqual(null);
      });
    });
  });

  describe('requestWeedmapsListingDetailsErrorReducer', () => {
    const testAction = {
      payload: {
        error: mockError,
      },
    };
    it('should set fetching to false', () => {
      const path = listingsPaths.fetching();
      const testState = getInitialState();
      set(testState, path, true);
      expect(get(testState, path)).toEqual(true);
      const newState = reducers.requestWeedmapsListingDetailsErrorReducer(testState, testAction);
      expect(get(newState, path)).toEqual(false);
    });
    it('should set error to action payload', () => {
      const path = listingsPaths.error();
      const testState = getInitialState();
      set(testState, path, null);
      expect(get(testState, path)).toEqual(null);
      const newState = reducers.requestWeedmapsListingDetailsErrorReducer(testState, testAction);
      expect(get(newState, path)).toEqual(testAction.payload.error);
    });
  });
});
