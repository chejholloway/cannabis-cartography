import React from 'react';
import PropTypes from 'prop-types';
import palette from '../../constants/palette';

import Accessible from '../../icons/accessible';
import Atm from '../../icons/atm';
import CreditCard from '../../icons/credit-card';
import Delivery from '../../icons/delivery';
import SolidLock from '../../icons/solid-lock';
import Photo from '../../icons/photo';
import VerifiedSeller from '../../icons/verified-seller';

import { LocationRow, BodyWrapper, BodyBlock } from './styles';

const ListingAmenities = (props) => (
	<BodyWrapper>
		{props.is_verified_seller && (
			<BodyBlock>
				<LocationRow>
					<VerifiedSeller width={`${25}px`} height={`${25}px`} fill={palette.gray4} />
					<br />
					Verified
				</LocationRow>
			</BodyBlock>
		)}
		{props.enabled_for_delivery && (
			<BodyBlock>
				<LocationRow>
					<Delivery width={`${25}px`} height={`${25}px`} fill={palette.gray4} />
					<br />
					Delivery
				</LocationRow>
			</BodyBlock>
		)}
		{props.has_handicap_access && (
			<BodyBlock>
				<LocationRow>
					<Accessible width={`${25}px`} height={`${25}px`} fill={palette.gray4} />
					<br />
					Accessible
				</LocationRow>
			</BodyBlock>
		)}
		{props.accepts_credit_cards && (
			<BodyBlock>
				<LocationRow>
					<CreditCard width={`${25}px`} height={`${25}px`} fill={palette.gray4} />
					<br />
					Accepts CC
				</LocationRow>
			</BodyBlock>
		)}
		{props.has_atm && (
			<BodyBlock>
				<LocationRow>
					<Atm width={`${25}px`} height={`${25}px`} fill={palette.gray4} />
					<br />
					ATM
				</LocationRow>
			</BodyBlock>
		)}
		{props.has_security_guard && (
			<BodyBlock>
				<LocationRow>
					<SolidLock width={`${25}px`} height={`${25}px`} fill={palette.gray4} />
					<br />
					Security
				</LocationRow>
			</BodyBlock>
		)}
		{props.has_photos && (
			<BodyBlock>
				<LocationRow>
					<Photo width={`${25}px`} height={`${25}px`} fill={palette.gray4} />
					<br />
					Photos
				</LocationRow>
			</BodyBlock>
		)}
		{props.has_videos && (
			<BodyBlock>
				<LocationRow>
					<Photo width={`${25}px`} height={`${25}px`} fill={palette.gray4} />
					<br />
					Videos
				</LocationRow>
			</BodyBlock>
		)}
	</BodyWrapper>
);

ListingAmenities.propTypes = {
	is_verified_seller: PropTypes.bool,
	enabled_for_delivery: PropTypes.bool,
	has_handicap_access: PropTypes.bool,
	accepts_credit_cards: PropTypes.bool,
	has_atm: PropTypes.bool,
	has_security_guard: PropTypes.bool,
	has_photos: PropTypes.bool,
	has_videos: PropTypes.bool
};

ListingAmenities.defaultProps = {
	is_verified_seller: false,
	enabled_for_delivery: false,
	has_handicap_access: false,
	accepts_credit_cards: false,
	has_atm: false,
	has_security_guard: false,
	has_photos: false,
	has_videos: false
};

export default ListingAmenities;
