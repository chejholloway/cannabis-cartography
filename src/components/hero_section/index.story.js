import React from 'react';
import storyBuilder from '../../storyBuilder';
import mockCoords from '../../__test__/mocks/coord-mock.json';
import mockLocation from '../../__test__/mocks/location-mock.json';
import Hero from '.';

export const mockProps = {
	...Hero.defaultProps
};

export const renderScene = (knobProps) => (knobs, props = knobProps) => (
	<Hero
		geoLocating={knobs.boolean('geoLocating', !!props.geoLocating)}
		geoLocation={knobs.object('geoLocation', props.geoLocation)}
		fetchingListings={knobs.boolean('fetchingListings', !!props.fetchingListings)}
		listingsLocation={knobs.object('listingsLocation', props.listingsLocation)}
	/>
);

export const scenarios = {
	default: renderScene({
		...mockProps
	}),
	geoLocating: renderScene({
		...mockProps,
		geoLocating: true
	}),
	fetchingListings: renderScene({
		...mockProps,
		fetchingListings: true
	}),
	geoLocation: renderScene({
		...mockProps,
		geoLocation: {
			latitude: mockCoords.latitude,
			longitude: mockCoords.longitude
		}
	}),
	listingsLocation: renderScene({
		...mockProps,
		geoLocation: {
			latitude: mockCoords.latitude,
			longitude: mockCoords.longitude
		},
		listingsLocation: mockLocation.data.location
	})
};

storyBuilder(scenarios, 'components/Hero');
