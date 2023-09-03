import mockCoords from '../../__test__/mocks/coord-mock.json';
import mockLocation from '../../__test__/mocks/location-mock.json';
import mockListing from '../../__test__/mocks/listing-mock.json';
import mockError from '../../__test__/mocks/error-mock.json';
import * as actions from '../actions/listings';
import * as thunks from './listings';

const mockListingId = mockListing.data.listing.wmid;

const mockDispatch = jest.fn();

const mockService = {
	getListingsByLocation: (_coords) => Promise.resolve(mockLocation),
	getListingById: (_id) => Promise.resolve(mockListing)
};

const mockServiceError = {
	getListingsByLocation: (_coords) => Promise.reject(mockError),
	getListingById: (_id) => Promise.reject(mockError)
};

const actionSpies = {
	requestListingsAction: jest.spyOn(actions, 'requestListingsAction'),
	receiveListingsAction: jest.spyOn(actions, 'receiveListingsAction'),
	requestListingsErrorAction: jest.spyOn(actions, 'requestListingsErrorAction'),
	requestListingDetailsAction: jest.spyOn(actions, 'requestListingDetailsAction'),
	receiveListingDetailsAction: jest.spyOn(actions, 'receiveListingDetailsAction'),
	requestListingDetailsErrorAction: jest.spyOn(actions, 'requestListingDetailsErrorAction')
};

describe('store/thunks/listings', () => {
	beforeEach(jest.clearAllMocks);

	describe('fetchListings', () => {
		const coords = {
			latitude: mockCoords.latitude,
			longitude: mockCoords.longitude
		};
		it('should dispatch requestListingsAction', () => {
			expect(mockDispatch).not.toHaveBeenCalled();
			expect(actionSpies.requestListingsAction).not.toHaveBeenCalled();
			thunks.fetchListings(coords, mockService)(mockDispatch);
			expect(mockDispatch).toHaveBeenCalled();
			expect(actionSpies.requestListingsAction).toHaveBeenCalled();
			expect(mockDispatch).toHaveBeenNthCalledWith(1, actions.requestListingsAction());
		});
		it('should call WeedmapsService.getListingsByLocation', () => {
			const getListingsByLocation = jest.spyOn(mockService, 'getListingsByLocation');
			expect(getListingsByLocation).not.toHaveBeenCalled();
			thunks.fetchListings(coords, mockService)(mockDispatch);
			expect(getListingsByLocation).toHaveBeenCalled();
		});
		it('should dispatch receiveListingsAction on success', async () => {
			expect(mockDispatch).not.toHaveBeenCalled();
			expect(actionSpies.receiveListingsAction).not.toHaveBeenCalled();
			await thunks.fetchListings(coords, mockService)(mockDispatch);
			expect(mockDispatch).toHaveBeenCalled();
			expect(actionSpies.receiveListingsAction).toHaveBeenCalled();
			expect(actionSpies.receiveListingsAction).toHaveBeenCalledWith(mockLocation);
			expect(mockDispatch).toHaveBeenNthCalledWith(2, actions.receiveListingsAction(mockLocation));
		});
		it('should dispatch requestListingsErrorAction on fail', async () => {
			expect(mockDispatch).not.toHaveBeenCalled();
			expect(actionSpies.requestListingsErrorAction).not.toHaveBeenCalled();
			await thunks.fetchListings(coords, mockServiceError)(mockDispatch);
			expect(mockDispatch).toHaveBeenCalled();
			expect(actionSpies.requestListingsErrorAction).toHaveBeenCalled();
			expect(actionSpies.requestListingsErrorAction).toHaveBeenCalledWith(mockError);
			expect(mockDispatch).toHaveBeenNthCalledWith(2, actions.requestListingsErrorAction(mockError));
		});
	});

	describe('fetchListingDetails', () => {
		const id = mockListingId;
		it('should dispatch requestListingDetailsAction', () => {
			expect(mockDispatch).not.toHaveBeenCalled();
			expect(actionSpies.requestListingDetailsAction).not.toHaveBeenCalled();
			thunks.fetchListingDetails(id, mockService)(mockDispatch);
			expect(mockDispatch).toHaveBeenCalled();
			expect(actionSpies.requestListingDetailsAction).toHaveBeenCalled();
			expect(mockDispatch).toHaveBeenNthCalledWith(1, actions.requestListingDetailsAction());
		});
		it('should call WeedmapsService.getListingById', () => {
			const getListingById = jest.spyOn(mockService, 'getListingById');
			expect(getListingById).not.toHaveBeenCalled();
			thunks.fetchListingDetails(id, mockService)(mockDispatch);
			expect(getListingById).toHaveBeenCalled();
		});
		it('should dispatch receiveListingDetailsAction on success', async () => {
			expect(mockDispatch).not.toHaveBeenCalled();
			expect(actionSpies.receiveListingDetailsAction).not.toHaveBeenCalled();
			await thunks.fetchListingDetails(id, mockService)(mockDispatch);
			expect(mockDispatch).toHaveBeenCalled();
			expect(actionSpies.receiveListingDetailsAction).toHaveBeenCalled();
			expect(actionSpies.receiveListingDetailsAction).toHaveBeenCalledWith(mockListing);
			expect(mockDispatch).toHaveBeenNthCalledWith(2, actions.receiveListingDetailsAction(mockListing));
		});
		it('should dispatch requestListingDetailsErrorAction on fail', async () => {
			expect(mockDispatch).not.toHaveBeenCalled();
			expect(actionSpies.requestListingDetailsErrorAction).not.toHaveBeenCalled();
			await thunks.fetchListingDetails(id, mockServiceError)(mockDispatch);
			expect(mockDispatch).toHaveBeenCalled();
			expect(actionSpies.requestListingDetailsErrorAction).toHaveBeenCalled();
			expect(actionSpies.requestListingDetailsErrorAction).toHaveBeenCalledWith(mockError);
			expect(mockDispatch).toHaveBeenNthCalledWith(2, actions.requestListingDetailsErrorAction(mockError));
		});
	});
});
