import React from 'react';
import logo from './logo.svg';
import './App.css';
import CountryList from './country_list'
import {Provider} from 'react-redux'
import {createStore} from 'redux'


const initialState = {
  countryList : []
}

function reducer( state, action ){
  switch(action.type){
    case 'SET_COUNTRY_LIST':{
      return {...state, countryList: action.payload} //objeto "...state" with spread operator
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
