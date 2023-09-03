import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Avatar from '../Avatar';
import StarRating from '../star_rating';

import { Wrapper, CardWrapper, TextColumn, LocationRow, TitleRow } from './styles';

const ListingCard = (props) => (
	<Wrapper>
		<Link to={`/listing/${props.wmid}-${props.slug}`}>
			<CardWrapper>
				<Avatar img={props.img} />
				<TextColumn>
					<LocationRow>
						{props.city}
						{props.city && props.state ? `, ` : null}
						{props.state}
						{props.city || props.state ? ` | ` : null}
						{Math.round(props.distance)}mi
					</LocationRow>
					<TitleRow>{props.name}</TitleRow>
					<StarRating rating={props.rating} maxRating={5} />
				</TextColumn>
			</CardWrapper>
		</Link>
	</Wrapper>
);

ListingCard.propTypes = {
	wmid: PropTypes.number,
	slug: PropTypes.string,
	name: PropTypes.string,
	img: PropTypes.string,
	city: PropTypes.string,
	state: PropTypes.string,
	distance: PropTypes.number,
	rating: PropTypes.number
};

ListingCard.defaultProps = {
	wmid: null,
	slug: null,
	name: null,
	img: undefined,
	city: null,
	state: null,
	distance: 0,
	rating: 0
};

export default ListingCard;
