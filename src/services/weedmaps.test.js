import mockCoords from '../__test__/mocks/coord-mock.json';
import mockListingDetailsResponse from '../__test__/mocks/listing-mock.json';
import * as utils from './utils';
import { WeedmapsService } from './weedmaps';

const mockhost = 'fake.url';
const mockRest = {
	get: jest.fn()
};
const mockService = new WeedmapsService(mockhost, mockRest);
const promiseGet = jest.spyOn(utils, 'promiseGet');
const mockListingId = mockListingDetailsResponse.data.listing.wmid;

describe('services/weedmaps', () => {
	beforeEach(jest.clearAllMocks);

	describe('getListingsByLocation', () => {
		it('should reject with an error if coords are not supplied', async () => {
			let testYield,
				testError = undefined;
			try {
				testYield = await mockService.getListingsByLocation();
			} catch (error) {
				testError = error;
			}
			expect(testYield).toBe(undefined);
			expect(testError).not.toBe(undefined);
		});
		it('should reject with an error if coords.latitude is not supplied', async () => {
			let testYield,
				testError = undefined;
			try {
				testYield = await mockService.getListingsByLocation({
					longitude: mockCoords.longitude
				});
			} catch (error) {
				testError = error;
			}
			expect(testYield).toBe(undefined);
			expect(testError).not.toBe(undefined);
		});
		it('should reject with an error if coords.longitude is not supplied', async () => {
			let testYield,
				testError = undefined;
			try {
				testYield = await mockService.getListingsByLocation({
					latitude: mockCoords.latitude
				});
			} catch (error) {
				testError = error;
			}
			expect(testYield).toBe(undefined);
			expect(testError).not.toBe(undefined);
		});
		it('should call promiseGet if coords are supplied', async () => {
			expect(promiseGet).not.toHaveBeenCalled();
			try {
				await mockService.getListingsByLocation({
					latitude: mockCoords.latitude,
					longitude: mockCoords.longitude
				});
			} catch (error) {
				//
			}
			expect(promiseGet).toHaveBeenCalled();
			expect(promiseGet).toHaveBeenCalledWith(
				{
					url: `https://${mockhost}/wm/v2/location?include%5B%5D=regions.listings&latlng=${mockCoords.latitude}%2C${mockCoords.longitude}`,
					headers: { 'Content-Type': 'application/json' }
				},
				mockRest
			);
		});
	});

	describe('getListingById', () => {
		it('should reject with an error if id is not supplied', async () => {
			let testYield,
				testError = undefined;
			try {
				testYield = await mockService.getListingById();
			} catch (error) {
				testError = error;
			}
			expect(testYield).toBe(undefined);
			expect(testError).not.toBe(undefined);
		});
		it('should reject with an error if id is not numeric', async () => {
			let testYield,
				testError = undefined;
			try {
				testYield = await mockService.getListingById('not a number');
			} catch (error) {
				testError = error;
			}
			expect(testYield).toBe(undefined);
			expect(testError).not.toBe(undefined);
		});
		it('should call promiseGet if id is supplied', async () => {
			expect(promiseGet).not.toHaveBeenCalled();
			try {
				await mockService.getListingById(mockListingId);
			} catch (error) {
				//
			}
			expect(promiseGet).toHaveBeenCalled();
			expect(promiseGet).toHaveBeenCalledWith(
				{
					url: `https://${mockhost}/wm/v2/listings/${mockListingId}`,
					headers: { 'Content-Type': 'application/json' }
				},
				mockRest
			);
		});
	});
});
