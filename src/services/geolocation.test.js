import mockCoords from '../__test__/mocks/coord-mock.json';
import mockError from '../__test__/mocks/error-mock.json';
import { LocationService } from './location';

const mockWindowSuccess = {
	navigator: {
		geolocation: {
			getCurrentPosition: (success, _error) => {
				success({ coords: mockCoords });
			}
		}
	}
};

const mockWindowFail = {
	navigator: {
		geolocation: {
			getCurrentPosition: (_success, error) => {
				error(mockError);
			}
		}
	}
};

const mockWindowNotEnabled = {
	navigator: {}
};

describe('services/geolocation', () => {
	describe('fetchCoordinates', () => {
		it('should call getCurrentPosition if navigator.geolocation is enabled', async () => {
			const mockWindow = mockWindowSuccess;
			const getCurrentPosition = jest.spyOn(mockWindow.navigator.geolocation, 'getCurrentPosition');
			const mockService = new LocationService(mockWindow);
			expect(getCurrentPosition).not.toHaveBeenCalled();
			await mockService.fetchCoordinates();
			expect(getCurrentPosition).toHaveBeenCalled();
		});
		it('should resolve with position.coords on success', async () => {
			const mockWindow = mockWindowSuccess;
			const mockService = new LocationService(mockWindow);
			let testYield,
				testError = undefined;
			try {
				testYield = await mockService.fetchCoordinates();
			} catch (error) {
				testError = error;
			}
			expect(testYield).toBe(mockCoords);
			expect(testError).toBe(undefined);
		});
		it('should reject with an error on fail', async () => {
			const mockWindow = mockWindowFail;
			const mockService = new LocationService(mockWindow);
			let testYield,
				testError = undefined;
			try {
				testYield = await mockService.fetchCoordinates();
			} catch (error) {
				testError = error;
			}
			expect(testYield).toBe(undefined);
			expect(testError).not.toBe(undefined);
		});
		it('should reject with an error if navigator.geolocation is not enabled', async () => {
			const mockWindow = mockWindowNotEnabled;
			const mockService = new LocationService(mockWindow);
			let testYield,
				testError = undefined;
			try {
				testYield = await mockService.fetchCoordinates();
			} catch (error) {
				testError = error;
			}
			expect(testYield).toBe(undefined);
			expect(testError).not.toBe(undefined);
		});
	});
});
