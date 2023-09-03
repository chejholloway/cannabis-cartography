import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as thunks from '../../store/thunks/location';
import * as listingsSelectors from '../../store/selectors/listings';
import * as locationsSelectors from '../../store/selectors/geo';
import * as listingsThunks from '../../store/thunks/listings';

import LocationService from '../../services/location';
import WeedmapsService from '../../services/weedmaps';

import HomePage from './HomePage';

export class Container extends HomePage {
	UNSAFE_componentWillReceiveProps(newProps) {
		if (newProps.geoLocating || newProps.fetchingListings) {
			return;
		}
		const { geoLocation, fetchListings } = this.props;
		if (
			(!geoLocation && newProps.geoLocation) ||
			(geoLocation &&
				newProps.geoLocation &&
				(newProps.geoLocation.latitude !== geoLocation.latitude ||
					newProps.geoLocation.longitude !== geoLocation.longitude))
		) {
			fetchListings(newProps.geoLocation);
		}
	}
}

Container.propTypes = {
	...HomePage.propTypes,
	fetchListings: PropTypes.func.isRequired
};

export const mapStateToProps = (state) => ({
	fetchingListings: listingsSelectors.fetchFetching(state),
	locationError: locationsSelectors.fetchError(state),
	geoLocating: locationsSelectors.fetchLocating(state),
	geoLocation: locationsSelectors.fetchLocation(state),
	listingsError: listingsSelectors.fetchError(state),
	listingsLocation: listingsSelectors.fetchLocation(state),
	listingsRegions: listingsSelectors.fetchRegions(state)
});

export const mapDispatchToProps = (services) => (dispatch) => ({
	fetchListings: (coords) => listingsThunks.fetchListings(coords, services.WeedmapsService)(dispatch),
	geoLocate: () => thunks.fetchCoordinates(services.LocationService)(dispatch)
});

const connectServices = (services) => connect(mapStateToProps, mapDispatchToProps(services))(Container);

export default connectServices({ LocationService, WeedmapsService });
