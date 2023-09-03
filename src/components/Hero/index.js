import React from 'react';
import PropTypes from 'prop-types';

import MapPin from '../../icons/map-pin';
import Locate from '../../icons/locate';

import palette from '../../constants/palette';

import { Wrapper, ContentContainer, LocationSection, LocateButton, TextContent } from './styles';

class Hero extends React.Component {
	getTitle = () => {
		const { geoLocating, fetchingListings, listingsLocation } = this.props;
		if (geoLocating) {
			return '...locating';
		}
		if (fetchingListings) {
			return '...fetching';
		}
		if (listingsLocation) {
			return listingsLocation.name;
		}
		return '';
	};

	getSubTitle = () => {
		const { geoLocation, listingsLocation } = this.props;
		if (listingsLocation) {
			return listingsLocation.quote || '';
		}
		if (geoLocation) {
			const { latitude, longitude } = geoLocation;
			const latitudeText = Math.sign(Number(latitude) || 0) > -1 ? 'north' : 'south';
			const longitudeText = Math.sign(Number(longitude) || 0) > -1 ? 'east' : 'west';
			return `${Math.abs(latitude)}° ${latitudeText}, ${Math.abs(longitude)}° ${longitudeText}`;
		}
		return `Click the 'Locate Me' button above.`;
	};

	handleLocate = (_event) => {
		const { geoLocate } = this.props;
		geoLocate();
	};

	render() {
		const { geoLocating, fetchingListings } = this.props;
		const thunking = geoLocating || fetchingListings;
		return (
			<Wrapper>
				<ContentContainer>
					<LocationSection>
						<h2>
							<MapPin fill={palette.gray4} width={'60px'} height={'40px'} />
							<span>{this.getTitle()}</span>
						</h2>
						<LocateButton onClick={thunking ? undefined : this.handleLocate} disabled={thunking}>
							<Locate fill={thunking ? palette.gray3 : palette.gray4} />
							<span> Locate Me </span>
						</LocateButton>
					</LocationSection>
					<TextContent>
						<h4>{this.getSubTitle()}</h4>
						Lorem Ipsum dolor sit amet, consectetur adispiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aligqua.<br />
						Ut enim ad minim veniam, quis.
					</TextContent>
				</ContentContainer>
			</Wrapper>
		);
	}
}

Hero.propTypes = {
	geoLocate: PropTypes.func.isRequired,
	geoLocating: PropTypes.bool,
	geoLocation: PropTypes.object,
	fetchingListings: PropTypes.bool,
	listingsLocation: PropTypes.object
};

Hero.defaultProps = {
	geoLocating: false,
	geoLocation: null,
	fetchingListings: false,
	listingsLocation: null
};

export default Hero;
