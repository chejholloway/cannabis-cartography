import React from 'react';
import storyBuilder from '../../storyBuilder';

import StarRating from './';

export const mockProps = {
  ...StarRating.defaultProps,
};

export const renderScene = knobProps => (knobs, props = knobProps) => (
  <StarRating
    rating={knobs.number('rating', props.rating)}
    maxRating={knobs.number('maxRating', props.maxRating)}
  />
);

export const scenarios = {
  'default': renderScene({
    ...StarRating.defaultProps,
  }),
  'rating': renderScene({
    ...StarRating.defaultProps,
    rating: 4.20,
  }),
  'maxRating': renderScene({
    ...StarRating.defaultProps,
    rating: 4.20,
    maxRating: 10,
  }),
};

storyBuilder(scenarios, 'components/star_rating');
