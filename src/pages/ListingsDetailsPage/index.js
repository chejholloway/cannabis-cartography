import { connect } from 'react-redux';

import WeedmapsService from '../../services/weedmaps';
import * as listingsSelectors from '../../store/selectors/listings';
import * as listingsThunks from '../../store/thunks/listings';

import ListingDetailsPage from './ListingDetailsPage';

export class Container extends ListingDetailsPage {
	componentWillMount() {
		const { listingId, listing, fetchListingDetails } = this.props;
		if (listingId && !listing) {
			fetchListingDetails(listingId);
		}
	}
}

export const mapStateToProps = (state, { match }) => ({
	listingId: Number(match.params.id.split('-')[0]),
	listing: listingsSelectors.getListingDetails(state, match.params.id),
	fetchingListings: listingsSelectors.fetchFetching(state),
	listingsError: listingsSelectors.fetchError(state)
});

export const mapDispatchToProps = (services) => (dispatch) => ({
	fetchListingDetails: (listingId) =>
		listingsThunks.fetchListingDetails(listingId, services.WeedmapsService)(dispatch)
});

const connectServices = (services) => connect(mapStateToProps, mapDispatchToProps(services))(Container);

export default connectServices({ WeedmapsService });
