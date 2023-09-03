import React from 'react';
import storyBuilder from '../../storyBuilder';
import mockListing from '../../__test__/mocks/listing-mock.json';
import ListingCard from './';

export const mockProps = {
  wmid: mockListing.data.listing.wmid,
  name: mockListing.data.listing.name,
  img: mockListing.data.listing.avatar_image.small_url,
  city: mockListing.data.listing.city,
  state: mockListing.data.listing.state,
  distance: 1,
  rating: mockListing.data.listing.rating,
};

export const renderScene = knobProps => (knobs, props = knobProps) => (
  <ListingCard
    wmid={knobs.number('wmid', props.wmid)}
    name={knobs.text('name', props.name)}
    img={knobs.text('img', props.img)}
    city={knobs.text('city', props.city)}
    state={knobs.text('state', props.state)}
    distance={knobs.number('distance', props.distance)}
    rating={knobs.number('rating', props.rating)}
  />
);

export const scenarios = {
  'default': renderScene({
    ...ListingCard.defaultProps,
  }),
  'listing': renderScene({
    ...ListingCard.defaultProps,
    ...mockProps,
  }),
};

storyBuilder(scenarios, 'components/listing_card');
