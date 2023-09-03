import React from 'react';
import { shallow } from 'enzyme';

import * as listingsSelectors from '../../store/selectors/listings';
import * as listingsThunks from '../../store/thunks/listings';
import { WeedmapsService } from '../../services/weedmaps';

import { Container, mapStateToProps, mapDispatchToProps } from './';

const mockDispatch = jest.fn();
const mockhost = 'fake.url';
const mockRest = {
	get: () => Promise.resolve({})
};
const mockWeedmapsService = new WeedmapsService(mockhost, mockRest);
const mockListingId = 420;

describe('pages/listing_details_page/index', () => {
	beforeEach(jest.clearAllMocks);

	describe('Container', () => {
		describe('componentWillMount', () => {
			it('should call fetchListingDetails if listingId exists and no listing', () => {
				const props = {
					listingId: 12345,
					fetchListingDetails: jest.fn()
				};
				expect(props.fetchListingDetails).not.toHaveBeenCalled();
				const container = shallow(<Container {...props} />);
				expect(props.fetchListingDetails).toHaveBeenCalledWith(props.listingId);
				props.fetchListingDetails.mockClear();
				expect(props.fetchListingDetails).not.toHaveBeenCalled();
				container.instance().componentWillMount();
				expect(props.fetchListingDetails).toHaveBeenCalledWith(props.listingId);
			});

			it('should not call fetchListingDetails if listing exists', () => {
				const props = {
					listingId: 12345,
					listing: { wmid: 12345 },
					fetchListingDetails: jest.fn()
				};
				expect(props.fetchListingDetails).not.toHaveBeenCalled();
				const container = shallow(<Container {...props} />);
				expect(props.fetchListingDetails).not.toHaveBeenCalled();
				props.fetchListingDetails.mockClear();
				expect(props.fetchListingDetails).not.toHaveBeenCalled();
				container.instance().componentWillMount();
				expect(props.fetchListingDetails).not.toHaveBeenCalled();
			});

			it('should not call fetchListingDetails if no listingId', () => {
				const props = {
					fetchListingDetails: jest.fn()
				};
				expect(props.fetchListingDetails).not.toHaveBeenCalled();
				const container = shallow(<Container {...props} />);
				expect(props.fetchListingDetails).not.toHaveBeenCalled();
				props.fetchListingDetails.mockClear();
				expect(props.fetchListingDetails).not.toHaveBeenCalled();
				container.instance().componentWillMount();
				expect(props.fetchListingDetails).not.toHaveBeenCalled();
			});
		});
	});

	describe('mapStateToProps', () => {
		const spies = {
			getListingDetails: jest.spyOn(listingsSelectors, 'getListingDetails')
		};
		const state = {};
		const listingId = 12345;
		const match = { params: { id: `${listingId}-some-slug` } };

		it('should parse match.params.id to yield numeric listingId prop', () => {
			const stateProps = mapStateToProps(state, { match });
			expect(typeof stateProps.listingId).toBe('number');
			expect(stateProps.listingId).toEqual(listingId);
		});

		it('should call getListingDetails selector to yield listing prop', () => {
			expect(spies.getListingDetails).not.toHaveBeenCalled();
			const stateProps = mapStateToProps(state, { match });
			expect(spies.getListingDetails).toHaveBeenCalledWith(state, match.params.id);
			expect(stateProps.listing).toEqual(listingsSelectors.getListingDetails(state, match.params.id));
		});
	});

	describe('mapDispatchToProps', () => {
		const spies = {
			fetchListingDetails: jest.spyOn(listingsThunks, 'fetchListingDetails')
		};
		const dispatchProps = mapDispatchToProps({
			WeedmapsService: mockWeedmapsService
		})(mockDispatch);

		it('should inject WeedmapsService and map fetchListingDetails thunk dispatch to fetchListingDetails prop', () => {
			expect(spies.fetchListingDetails).not.toHaveBeenCalled();
			const prop = dispatchProps.fetchListingDetails(mockListingId);
			expect(spies.fetchListingDetails).toHaveBeenLastCalledWith(mockListingId, mockWeedmapsService);
			expect(prop).toEqual(listingsThunks.fetchListingDetails(mockListingId, mockWeedmapsService)(mockDispatch));
		});
	});
});
