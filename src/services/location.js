export class LocationService {
	browserWindow;
	constructor(browserWindow) {
		this.browserWindow = browserWindow;
	}

	fetchCoordinates = () =>
		new Promise((resolve, reject) => {
			const { navigator } = this.browserWindow;
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition((position) => resolve(position.coords), reject);
			} else {
				reject(new Error('Navigator GeoLocation does not appear to be enabled'));
			}
		});
}

export default new LocationService(window);
