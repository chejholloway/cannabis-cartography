import * as types from '../../constants/actionTypes';

export const requestListingsAction = coords => ({
  type: types.REQUEST_WEEDMAPS_LISTINGS,
  payload: {
    coords,
  },
});

export const receiveListingsAction = response => ({
  type: types.RECEIVE_WEEDMAPS_LISTINGS,
  payload: {
    location: response.data.location,
    regions: response.data.regions,
  },
});

export const requestListingsErrorAction = error => ({
  type: types.REQUEST_WEEDMAPS_LISTINGS_ERROR,
  payload: {
    error,
    message: 'Oops something went wrong',
  },
});

export const requestListingDetailsAction = id => ({
  type: types.REQUEST_WEEDMAPS_LISTING_DETAILS,
  payload: {
    id,
  },
});

export const receiveListingDetailsAction = response => ({
  type: types.RECEIVE_WEEDMAPS_LISTING_DETAILS,
  payload: {
    listing: response.data.listing,
  },
});

export const requestListingDetailsErrorAction = error => ({
  type: types.REQUEST_WEEDMAPS_LISTING_DETAILS_ERROR,
  payload: {
    error,
    message: 'Oops something went wrong',
  },
});
