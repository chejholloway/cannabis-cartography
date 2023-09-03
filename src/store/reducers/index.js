import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import geo from './geo';
import listings from './listings';

const history = createBrowserHistory();
const router = connectRouter(history);

const rootReducer = combineReducers({
  router,
  geo,
  listings,
});

export default rootReducer;
