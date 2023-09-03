import {
  requestListingsAction,
  receiveListingsAction,
  requestListingsErrorAction,
  requestListingDetailsAction,
  receiveListingDetailsAction,
  requestListingDetailsErrorAction,
} from '../actions/listings';

export const fetchListings = (coords, service) => dispatch => {
  dispatch(requestListingsAction());
  service.getListingsByLocation(coords).then(
    response => dispatch(receiveListingsAction(response)),
    error => dispatch(requestListingsErrorAction(error)),
  )
}

export const fetchListingDetails = (id, service) => dispatch => {
  dispatch(requestListingDetailsAction());
  service.getListingById(id).then(
    response => dispatch(receiveListingDetailsAction(response)),
    error => dispatch(requestListingDetailsErrorAction(error)),
  )
}
