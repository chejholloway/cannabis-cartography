import React, { Component } from 'react';
import PropTypes from 'prop-types';
import pick from 'lodash.pick';
import get from 'lodash.get';

import ListingDetails from '../../components/listing_details';
import LoadingBars from '../../components/Loader';

import { Wrapper, Content } from './styles';

class ListingDetailsPage extends Component {
	render() {
		const { listing, listingsError, fetchingListings } = this.props;
		const error = listingsError;
		const loading = fetchingListings;
		return (
			<Wrapper>
				{loading && <LoadingBars />}
				<Content>
					{error && <div className="error">{error.message}</div>}
					{listing && (
						<ListingDetails
							{...pick(listing, [ 'name', 'address', 'phone_number', 'rating', 'business_hours' ])}
							img={get(listing, [ 'avatar_image', 'small_url' ], undefined)}
							enabled_for_delivery={get(listing, [ 'online_ordering', 'enabled_for_delivery' ], false)}
						/>
					)}
				</Content>
			</Wrapper>
		);
	}
}

ListingDetailsPage.propTypes = {
	listingId: PropTypes.number,
	listing: PropTypes.object,
	fetchingListings: PropTypes.bool,
	listingsError: PropTypes.object
};

ListingDetailsPage.defaultProps = {
	listingId: null,
	listing: null,
	fetchingListings: false,
	listingsError: null
};

export default ListingDetailsPage;
