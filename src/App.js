import React from 'react';
//import logo from './logo.svg';
import './App.css';
import CountryList from './country_list'
import {Provider} from 'react-redux'
import {createStore} from 'redux'


const initialState = {
  countryList : [],
  countryListByName: [],
  countryListByRegion: [],
}

function reducer( state, action ){

  switch(action.type){
    case 'SET_COUNTRY_LIST': {
      const allList = action.payload
      return {...state, countryList: allList} //objeto "...state" with spread operator
    }
    
    case 'FILTER_BY_NAME': {
      const allList = action.payload.toLowerCase()
      const countryListByName = state.countryList.filter(c => c.name.toLowerCase().includes(allList))
      return {...state,  countryListByName }
    }

    default: {
      return state
    }
  }
}

const store = createStore(reducer, initialState) // 3 params by default: reducer, initialState, enhacer

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CountryList />
      </div>
    </Provider>
    
  );
}

export default App;
