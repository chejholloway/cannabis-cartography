import React from 'react';
import PropTypes from 'prop-types';

import {
  Wrapper,
  Stars,
  FillStars,
  EmptyStars,
  Rating,
} from './styles';

class StarRating extends React.Component {
  roundRating = rating => Number.parseFloat(rating).toPrecision(2);
  ratingPercent = (rating, maxRating) => `${(rating / maxRating) * 100}%`;
  drawStars = n => (
    <React.Fragment>
      {[...Array(n)].map((_e, i) => (<span key={i}>★</span>))}
    </React.Fragment>
  );
  render() {
    const { roundRating, ratingPercent, drawStars } = this;
    const { rating, maxRating } = this.props;
    return (
      <Wrapper>
        <Stars>
          <FillStars percent={ratingPercent(rating, maxRating)}>{drawStars(maxRating)}</FillStars>
          <EmptyStars>{drawStars(maxRating)}</EmptyStars>
        </Stars>
        <Rating>
          {roundRating(rating)}
        </Rating>
      </Wrapper>
    )
  }
}

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
  maxRating: PropTypes.number.isRequired,
};

StarRating.defaultProps = {
  rating: 0,
  maxRating: 5,
};

export default StarRating;
