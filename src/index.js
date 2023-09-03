import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import configureStore from './store/configureStore';

import HomePage from './pages/HomePage';
import ListingDetailsPage from './pages/ListingsDetailsPage/index';

import Header from './components/Header/';

import { GlobalStyle } from './styles';

const cacheStore = window.localStorage.getItem('store') || {};
const store = configureStore(cacheStore);
const history = createBrowserHistory();

render(
	<Provider store={store}>
		<React.Fragment>
			<GlobalStyle />
			<ConnectedRouter history={history}>
				<Header />
				<Switch>
					<Route exact={true} key={'home'} path={'/home'} component={HomePage} />
					<Route exact={true} key={'listing'} path={'/listing/:id'} component={ListingDetailsPage} />
					<Redirect to={`/home`} />
				</Switch>
			</ConnectedRouter>
		</React.Fragment>
	</Provider>,
	document.getElementById('root')
);
