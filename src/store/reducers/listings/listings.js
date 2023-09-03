import clone from 'lodash.clonedeep';
import set from 'lodash.set';
import { listingsPaths } from '../../../constants/storePaths';

/*
 * REQUEST_WEEDMAPS_LISTINGS
 */
export const requestWeedmapsListingsReducer = state => {
  const newState = clone(state);
  set(newState, listingsPaths.fetching(), true);
  return newState;
};

/*
 * RECEIVE_WEEDMAPS_LISTINGS
 */
export const receiveWeedmapsListingsReducer = (state, action) => {
  const newState = clone(state);
  set(newState, listingsPaths.fetching(), false);
  set(newState, listingsPaths.location(), action.payload.location);
  set(newState, listingsPaths.regions(), action.payload.regions);
  set(newState, listingsPaths.error(), null);
  return newState;
};

/*
 * REQUEST_WEEDMAPS_LISTINGS_ERROR
 */
export const requestWeedmapsListingsErrorReducer = (state, action) => {
  const newState = clone(state);
  set(newState, listingsPaths.fetching(), false);
  set(newState, listingsPaths.location(), null);
  set(newState, listingsPaths.regions(), null);
  set(newState, listingsPaths.error(), action.payload.error);
  return newState;
};

/*
 * REQUEST_WEEDMAPS_LISTING_DETAILS
 */
export const requestWeedmapsListingDetailsReducer = state => {
  const newState = clone(state);
  set(newState, listingsPaths.fetching(), true);
  return newState;
};

/*
 * RECEIVE_WEEDMAPS_LISTING_DETAILS
 */
export const receiveWeedmapsListingDetailsReducer = (state, action) => {
  const { listing } = action.payload;
  const newState = clone(state);
  set(newState, listingsPaths.fetching(), false);
  if (listing && listing.wmid) {
    const detailsKey = `${listing.wmid}-${listing.slug}`;
    const detailsPath = listingsPaths.details(detailsKey);
    set(newState, detailsPath, listing);
    set(newState, listingsPaths.error(), null);
  } else {
    set(newState, listingsPaths.error(), new Error('payload does not contain a valid listing'));
  }
  return newState;
};

/*
 * REQUEST_WEEDMAPS_LISTING_DETAILS_ERROR
 */
export const requestWeedmapsListingDetailsErrorReducer = (state, action) => {
  const newState = clone(state);
  set(newState, listingsPaths.fetching(), false);
  set(newState, listingsPaths.error(), action.payload.error);
  return newState;
};
