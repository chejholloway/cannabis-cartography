import React from 'react';
import pick from 'lodash.pick';
import get from 'lodash.get';
import storyBuilder from '../../storyBuilder';
import mockListing from '../../__test__/mocks/listing-mock.json';
import ListingAmenities from './';

export const mockProps = {
  ...pick(mockListing.data.listing, [
    'is_verified_seller',
    'has_handicap_access',
    'accepts_credit_cards',
    'has_atm',
    'has_security_guard',
    'has_photos',
    'has_videos',
  ]),
  enabled_for_delivery: get(mockListing.data.listing, [
    'online_ordering',
    'enabled_for_delivery',
  ], false),
};

export const renderScene = knobProps => (knobs, props = knobProps) => (
  <ListingAmenities
    is_verified_seller={knobs.boolean('is_verified_seller', props.is_verified_seller)}
    enabled_for_delivery={knobs.boolean('enabled_for_delivery', props.enabled_for_delivery)}
    has_handicap_access={knobs.boolean('has_handicap_access', props.has_handicap_access)}
    accepts_credit_cards={knobs.boolean('accepts_credit_cards', props.accepts_credit_cards)}
    has_atm={knobs.boolean('has_atm', props.has_atm)}
    has_security_guard={knobs.boolean('has_security_guard', props.has_security_guard)}
    has_photos={knobs.boolean('has_photos', props.has_photos)}
    has_videos={knobs.boolean('has_videos', props.has_videos)}
  />
);

export const scenarios = {
  'default': renderScene({
    ...ListingAmenities.defaultProps,
  }),
  'amenities': renderScene({
    ...ListingAmenities.defaultProps,
    ...mockProps,
  }),
};

storyBuilder(scenarios, 'components/listing_amenities');
