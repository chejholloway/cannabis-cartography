import * as actionTypes from '../../../constants/actionTypes';
import { listingsPaths } from '../../../constants/storePaths';
import * as reducers from './listings';

export const getInitialState = () => ({
  [listingsPaths.fetching()]: false,
  [listingsPaths.location()]: null,
  [listingsPaths.regions()]: null,
  [listingsPaths.details()]: {},
  [listingsPaths.error()]: null,
})

export const actionReducers = {
  [actionTypes.REQUEST_WEEDMAPS_LISTINGS]: reducers.requestWeedmapsListingsReducer,
  [actionTypes.RECEIVE_WEEDMAPS_LISTINGS]: reducers.receiveWeedmapsListingsReducer,
  [actionTypes.REQUEST_WEEDMAPS_LISTINGS_ERROR]: reducers.requestWeedmapsListingsErrorReducer,
  [actionTypes.REQUEST_WEEDMAPS_LISTING_DETAILS]: reducers.requestWeedmapsListingDetailsReducer,
  [actionTypes.RECEIVE_WEEDMAPS_LISTING_DETAILS]: reducers.receiveWeedmapsListingDetailsReducer,
  [actionTypes.REQUEST_WEEDMAPS_LISTING_DETAILS_ERROR]: reducers.requestWeedmapsListingDetailsErrorReducer,
};

export default (state = getInitialState(), action) => {
  const reducer = actionReducers[action.type];
  return reducer ? reducer(state, action) : state;
};
