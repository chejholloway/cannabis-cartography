import { createSelector } from 'reselect';
import get from 'lodash.get';
import { listingsPaths } from '../../constants/storePaths';

export const getScopedState = (state) => get(state, [ 'listings' ]);
const echo = (selected) => selected;

/*
 * fetchFetching
 */
const fetchFetchingSelector = (state) => get(getScopedState(state), listingsPaths.fetching(), false);
export const fetchFetching = createSelector([ fetchFetchingSelector ], echo);

/*
 * fetchLocation
 */
const fetchLocationSelector = (state) => get(getScopedState(state), listingsPaths.location(), null);
export const fetchLocation = createSelector([ fetchLocationSelector ], echo);

/*
 * fetchRegions
 */
const fetchRegionsSelector = (state) => get(getScopedState(state), listingsPaths.regions(), null);
export const fetchRegions = createSelector([ fetchRegionsSelector ], echo);

/*
 * getListingDetails
 */
const getListingDetailsSelector = (state, listingId) =>
	get(getScopedState(state), listingsPaths.details(listingId), null);
export const getListingDetails = createSelector([ getListingDetailsSelector ], echo);

/*
 * fetchError
 */
const fetchErrorSelector = (state) => get(getScopedState(state), listingsPaths.error(), null);
export const fetchError = createSelector([ fetchErrorSelector ], echo);
