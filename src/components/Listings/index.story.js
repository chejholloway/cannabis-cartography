import React from 'react';
import storyBuilder from '../../storyBuilder';
import mockLocation from '../../__test__/mocks/location-mock.json';
import Listings from './';

export const mockProps = {
  location: mockLocation.data.location,
  regions: mockLocation.data.regions,
};

export const renderScene = knobProps => (knobs, props = knobProps) => (
  <Listings
    location={knobs.object('location', props.location)}
    regions={knobs.object('regions', props.regions)}
  />
);

export const scenarios = {
  'default': renderScene({
    ...Listings.defaultProps,
  }),
  'listings': renderScene({
    ...mockProps,
  }),
};

storyBuilder(scenarios, 'components/listings');
