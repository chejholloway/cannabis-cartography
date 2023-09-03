import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash.get';

import ListingCard from '../listing_card';

import Delivery from '../../icons/delivery';
import Dispensary from '../../icons/dispensary';
import Doctor from '../../icons/doctor';

import { ListingGroups } from './styles';

import palette from '../../constants/palette';

class Listings extends React.Component {
	regionTypes = {
		delivery: {
			label: 'Delivery Services',
			icon: <Delivery fill={palette.gray4} />
		},
		dispensary: {
			label: 'Dispensary Storefronts',
			icon: <Dispensary fill={palette.gray4} />
		},
		doctor: {
			label: 'Doctors',
			icon: <Doctor fill={palette.gray4} />
		}
	};

	renderLabel = (region, label, icon) => {
		if (get(region, 'listings', []).length) {
			return (
				<div key={label}>
					<strong>
						{' '}
						{icon} {label}{' '}
					</strong>
				</div>
			);
		}
		return <div />;
	};

	render() {
		// eslint-disable-next-line no-unused-vars
		const { location, regions } = this.props;
		const { regionTypes, renderLabel } = this;
		return (
			<React.Fragment>
				{Object.keys(regionTypes).map((regionType) => (
					<ListingGroups key={regionType}>
						<h2>
							{renderLabel(
								regions[regionType],
								regionTypes[regionType].label,
								regionTypes[regionType].icon
							)}
						</h2>
						{get(regions[regionType], 'listings', []).map((listing) => (
							<ListingCard
								key={listing.id}
								wmid={listing.wmid}
								slug={listing.slug}
								name={listing.name}
								img={get(listing, [ 'avatar_image', 'small_url' ], undefined)}
								city={listing.city}
								state={listing.state}
								distance={listing.distance}
								rating={listing.rating}
							/>
						))}
					</ListingGroups>
				))}
			</React.Fragment>
		);
	}
}

Listings.propTypes = {
	location: PropTypes.object,
	regions: PropTypes.object
};

Listings.defaultProps = {
	location: {},
	regions: {}
};

export default Listings;
