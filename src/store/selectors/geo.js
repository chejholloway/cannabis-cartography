import { createSelector } from 'reselect';
import get from 'lodash.get';
import { geoPaths } from '../../constants/storePaths';

export const getScopedState = (state) => get(state, [ 'geo' ]);
const echo = (selected) => selected;

/*
 * fetchLocating
 */
const fetchLocatingSelector = (state) => get(getScopedState(state), geoPaths.locating(), false);
export const fetchLocating = createSelector([ fetchLocatingSelector ], echo);

/*
 * fetchLocation
 */
const fetchLocationSelector = (state) => get(getScopedState(state), geoPaths.location(), null);
export const fetchLocation = createSelector([ fetchLocationSelector ], echo);

/*
 * fetchError
 */
const fetchErrorSelector = (state) => get(getScopedState(state), geoPaths.error(), null);
export const fetchError = createSelector([ fetchErrorSelector ], echo);
