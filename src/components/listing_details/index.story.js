import React from 'react';
import pick from 'lodash.pick';
import get from 'lodash.get';
import storyBuilder from '../../storyBuilder';
import mockListing from '../../__test__/mocks/listing-mock.json';
import ListingDetails from './';

export const mockProps = {
  ...pick(mockListing.data.listing, [
    'name',
    'type',
    'license_type',
    'address',
    'city',
    'state',
    'zip_code',
    'phone_number',
    'email',
    'website',
    'web_url',
    'rating',
    'reviews_count',
    'business_hours',
    'intro_body',
    'description',
    'announcement',
    'is_verified_seller',
    'has_handicap_access',
    'accepts_credit_cards',
    'has_atm',
    'has_security_guard',
    'has_photos',
    'has_videos',
  ]),
  img: get(mockListing.data.listing, [
    'avatar_image',
    'small_url',
  ], false),
  enabled_for_delivery: get(mockListing.data.listing, [
    'online_ordering',
    'enabled_for_delivery',
  ], false),
}

export const renderScene = knobProps => (knobs, props = knobProps) => (
  <ListingDetails
    name={knobs.text('name', props.name)}
    img={knobs.text('img', props.img)}
    type={knobs.text('type', props.type)}
    license_type={knobs.text('license_type', props.license_type)}
    address={knobs.text('address', props.address)}
    city={knobs.text('city', props.city)}
    state={knobs.text('state', props.state)}
    zip_code={knobs.text('zip_code', props.zip_code)}
    phone_number={knobs.text('phone_number', props.phone_number)}
    email={knobs.text('email', props.email)}
    website={knobs.text('website', props.website)}
    web_url={knobs.text('web_url', props.web_url)}
    rating={knobs.number('rating', props.rating)}
    reviews_count={knobs.number('reviews_count', props.reviews_count)}
    business_hours={knobs.object('business_hours', props.business_hours)}
    intro_body={knobs.text('intro_body', props.intro_body)}
    description={knobs.text('description', props.description)}
    announcement={knobs.text('announcement', props.announcement)}
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
    ...ListingDetails.defaultProps,
  }),
  'listing': renderScene({
    ...ListingDetails.defaultProps,
    ...mockProps,
  }),
};

storyBuilder(scenarios, 'components/listing_details');
