import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import CountryList from './country_list';
import reducer from './reducer';
import ActionList from './action-list';

const initialState = {
	countryList: [],
	countryListByName: [],
	countryListByRegion: [],
	filterByRegion: ''
};

const store = createStore(reducer, initialState); // 3 params by default: reducer, initialState, enhacer

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<ActionList />
				<CountryList />
			</div>
		</Provider>
	);
}

export default App;
