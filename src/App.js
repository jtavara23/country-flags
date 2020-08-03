import React, { useState, useEffect } from 'react';
//import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import CountryList from './country_list';
import reducer from './reducer';
import ActionList from './action-list';
import Header from './header';
import CountryPage from './country_page';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const initialState = {
	countryList: [],
	countryListByName: [],
	countryListByRegion: [],
	filterByRegion: ''
};

const store = createStore(reducer, initialState); // 3 params by default: reducer, initialState, enhacer

function App() {
	const [ darkMode, setDarkMode ] = useState(false);
	const [ checked, setChecked ] = useState(false);
	const mainClass = darkMode ? 'is-dark-mode' : 'is-light-mode';

	function changeMedia(mq) {
		setDarkMode(mq.matches);
		setChecked(mq.matches);
	}

	useEffect(() => {
		const mq = window.matchMedia('(prefers-color-scheme: dark)');
		mq.addListener(changeMedia);
		setDarkMode(mq.matches);
		setChecked(mq.matches);
		return () => {
			mq.removeListener(changeMedia);
		};
	}, []);

	return (
		<main class={mainClass}>
			<Provider store={store}>
				<Router>
					<Header />
					<Switch>
						<Route path="/country/:id" component={CountryPage} />
						<Route path="/">
							<ActionList />
							<CountryList />
						</Route>
					</Switch>
				</Router>
			</Provider>
		</main>
	);
}

export default App;
