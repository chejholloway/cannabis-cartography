import * as types from '../../constants/actionTypes';

import mockListingsResponse from '../../__test__/mocks/location-mock.json';
import mockListingDetailsResponse from '../../__test__/mocks/listing-mock.json';
import defaultTestCoords from '../../__test__/mocks/coord-mock.json';
import mockError from '../../__test__/mocks/error-mock.json';

import * as actions from './listings';

const mockCoords = {
  latitude: defaultTestCoords.latitude,
  longitude: defaultTestCoords.longitude,
};

const mockListingId = mockListingDetailsResponse.data.listing.wmid;

describe('store/actions/listings', () => {

  describe('requestListingsAction', () => {
    const testAction = actions.requestListingsAction(mockCoords);
    it(`should create action of type ${types.REQUEST_WEEDMAPS_LISTINGS}`, () => {
      expect(testAction.type).toEqual(types.REQUEST_WEEDMAPS_LISTINGS);
    });
    it(`should create action with payload of coords`, () => {
      expect(testAction.payload.coords).toEqual(mockCoords);
    });
  });

  describe('receiveListingsAction', () => {
    const testAction = actions.receiveListingsAction(mockListingsResponse);
    it(`should create action of type ${types.RECEIVE_WEEDMAPS_LISTINGS}`, () => {
      expect(testAction.type).toEqual(types.RECEIVE_WEEDMAPS_LISTINGS);
    });
    it(`should create action with payload of location`, () => {
      expect(testAction.payload.location).toEqual(mockListingsResponse.data.location);
    });
    it(`should create action with payload of regions`, () => {
      expect(testAction.payload.regions).toEqual(mockListingsResponse.data.regions);
    });
  });

  describe('requestListingsErrorAction', () => {
    const testAction = actions.requestListingsErrorAction(mockError);
    it(`should create action of type ${types.REQUEST_WEEDMAPS_LISTINGS_ERROR}`, () => {
      expect(testAction.type).toEqual(types.REQUEST_WEEDMAPS_LISTINGS_ERROR);
    });
    it(`should create action with payload of error`, () => {
      expect(testAction.payload.error).toEqual(mockError);
    });
    it(`should create action with payload of message`, () => {
      expect(testAction.payload.message).toEqual('Oops something went wrong');
    });
  });

  describe('requestListingDetailsAction', () => {
    const testAction = actions.requestListingDetailsAction(mockListingId);
    it(`should create action of type ${types.REQUEST_WEEDMAPS_LISTING_DETAILS}`, () => {
      expect(testAction.type).toEqual(types.REQUEST_WEEDMAPS_LISTING_DETAILS);
    });
    it(`should create action with payload of id`, () => {
      expect(testAction.payload.id).toEqual(mockListingId);
    });
  });

  describe('receiveListingDetailsAction', () => {
    const testAction = actions.receiveListingDetailsAction(mockListingDetailsResponse);
    it(`should create action of type ${types.RECEIVE_WEEDMAPS_LISTING_DETAILS}`, () => {
      expect(testAction.type).toEqual(types.RECEIVE_WEEDMAPS_LISTING_DETAILS);
    });
    it(`should create action with payload of listing`, () => {
      expect(testAction.payload.listing).toEqual(mockListingDetailsResponse.data.listing);
    });
  });

  describe('requestListingDetailsErrorAction', () => {
    const testAction = actions.requestListingDetailsErrorAction(mockError);
    it(`should create action of type ${types.REQUEST_WEEDMAPS_LISTING_DETAILS_ERROR}`, () => {
      expect(testAction.type).toEqual(types.REQUEST_WEEDMAPS_LISTING_DETAILS_ERROR);
    });
    it(`should create action with payload of error`, () => {
      expect(testAction.payload.error).toEqual(mockError);
    });
    it(`should create action with payload of message`, () => {
      expect(testAction.payload.message).toEqual('Oops something went wrong');
    });
  });
});
