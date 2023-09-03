import React from 'react';
import { shallow } from 'enzyme';

import * as geoSelectors from '../../store/selectors/geo';
import * as geoThunks from '../../store/thunks/geo';
import * as listingsSelectors from '../../store/selectors/listings';
import * as listingsThunks from '../../store/thunks/listings';
import { LocationService } from '../../services/location';
import { WeedmapsService } from '../../services/weedmaps';

import { Container, mapStateToProps, mapDispatchToProps } from '.';

const mockDispatch = jest.fn();
const mockhost = 'fake.url';
const mockRest = {
	get: () => Promise.resolve({})
};
const mockWeedmapsService = new WeedmapsService(mockhost, mockRest);
const mockWindow = { navigator: {} };
const mockGeoService = new LocationService(mockWindow);
const mockListingId = 420;

const mockActions = {
	geoLocate: jest.fn(),
	fetchListings: jest.fn()
};

const mockDenver = {
	latitude: 39.7392,
	longitude: -104.9903
};

const mockIrvine = {
	latitude: 33.6846,
	longitude: -117.8265
};

describe('pages/HomePage/index', () => {
	beforeEach(jest.clearAllMocks);

	describe('Container', () => {
		describe('componentWillReceiveProps', () => {
			it('should not call fetchListings if geoLocating', () => {
				const props = {
					...mockActions
				};
				const newProps = {
					...props,
					geoLocating: true
				};
				const container = shallow(<Container {...props} />);
				expect(props.fetchListings).not.toHaveBeenCalled();
				container.instance().componentWillReceiveProps(newProps);
				expect(props.fetchListings).not.toHaveBeenCalled();
			});

			it('should not call fetchListings if fetchingListings', () => {
				const props = {
					...mockActions
				};
				const newProps = {
					...props,
					fetchingListings: true
				};
				const container = shallow(<Container {...props} />);
				expect(props.fetchListings).not.toHaveBeenCalled();
				container.instance().componentWillReceiveProps(newProps);
				expect(props.fetchListings).not.toHaveBeenCalled();
			});

			it('should call fetchListings if geoLocation received for first time', () => {
				const props = {
					...mockActions
				};
				const newProps = {
					...props,
					geoLocation: mockDenver
				};
				const container = shallow(<Container {...props} />);
				expect(props.fetchListings).not.toHaveBeenCalled();
				container.instance().componentWillReceiveProps(newProps);
				expect(props.fetchListings).toHaveBeenCalledWith(newProps.geoLocation);
			});

			it('should call fetchListings if geoLocation received has changed', () => {
				const props = {
					...mockActions,
					geoLocation: mockDenver
				};
				const newProps = {
					...props,
					geoLocation: mockIrvine
				};
				const container = shallow(<Container {...props} />);
				expect(props.fetchListings).not.toHaveBeenCalled();
				container.instance().componentWillReceiveProps(newProps);
				expect(props.fetchListings).toHaveBeenCalledWith(newProps.geoLocation);
			});
		});
	});

	describe('mapStateToProps', () => {
		const state = {};
		const helpers = {
			expectSelectorToYield: ({ selectors, selector, prop }) => {
				const spy = jest.spyOn(selectors, selector);
				expect(spy).not.toHaveBeenCalled();
				const stateProps = mapStateToProps(state);
				expect(spy).toHaveBeenCalledWith(state);
				expect(stateProps[prop]).toEqual(selectors[selector](state));
			}
		};

		it('should call fetchLocating selector to yield geoLocating prop', () => {
			helpers.expectSelectorToYield({
				selectors: geoSelectors,
				selector: 'fetchLocating',
				prop: 'geoLocating'
			});
		});

		it('should call fetchLocation selector to yield geoLocation prop', () => {
			helpers.expectSelectorToYield({
				selectors: geoSelectors,
				selector: 'fetchLocation',
				prop: 'geoLocation'
			});
		});

		it('should call fetchError selector to yield locationError prop', () => {
			helpers.expectSelectorToYield({
				selectors: geoSelectors,
				selector: 'fetchError',
				prop: 'locationError'
			});
		});

		it('should call fetchFetching selector to yield fetchingListings prop', () => {
			helpers.expectSelectorToYield({
				selectors: listingsSelectors,
				selector: 'fetchFetching',
				prop: 'fetchingListings'
			});
		});

		it('should call fetchLocation selector to yield listingsLocation prop', () => {
			helpers.expectSelectorToYield({
				selectors: listingsSelectors,
				selector: 'fetchLocation',
				prop: 'listingsLocation'
			});
		});

		it('should call fetchRegions selector to yield listingsRegions prop', () => {
			helpers.expectSelectorToYield({
				selectors: listingsSelectors,
				selector: 'fetchRegions',
				prop: 'listingsRegions'
			});
		});

		it('should call fetchError selector to yield listingsError prop', () => {
			helpers.expectSelectorToYield({
				selectors: listingsSelectors,
				selector: 'fetchError',
				prop: 'listingsError'
			});
		});
	});

	describe('mapDispatchToProps', () => {
		const spies = {
			fetchCoordinates: jest.spyOn(geoThunks, 'fetchCoordinates'),
			fetchListings: jest.spyOn(listingsThunks, 'fetchListings')
		};
		const dispatchProps = mapDispatchToProps({
			geoService: mockGeoService,
			WeedmapsService: mockWeedmapsService
		})(mockDispatch);

		it('should inject geoService and map fetchCoordinates thunk dispatch to geoLocate prop', () => {
			expect(spies.fetchCoordinates).not.toHaveBeenCalled();
			const prop = dispatchProps.geoLocate();
			expect(spies.fetchCoordinates).toHaveBeenLastCalledWith(mockGeoService);
			expect(prop).toEqual(listingsThunks.fetchListingDetails(mockListingId, mockWeedmapsService)(mockDispatch));
		});

		it('should inject WeedmapsService and map fetchListings thunk dispatch to fetchListings prop', () => {
			expect(spies.fetchListings).not.toHaveBeenCalled();
			const prop = dispatchProps.fetchListings(mockDenver);
			expect(spies.fetchListings).toHaveBeenCalled();
			expect(spies.fetchListings).toHaveBeenLastCalledWith(mockDenver, mockWeedmapsService);
			expect(prop).toEqual(listingsThunks.fetchListings(mockDenver, mockWeedmapsService)(mockDispatch));
		});
	});
});
