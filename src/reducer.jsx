
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
  
      case 'FILTER_BY_REGION': {
        const {regionSelected} = action.payload;
  
        if (regionSelected === '') {
          return {...state, countryListByRegion: [], filterByRegion: '',};
        }
  
        const countryListByRegion = state.countryList.filter((country) => country.region === regionSelected);
        return { ...state, countryListByRegion, filterByRegion: regionSelected}
      }
  
      default: {
        return state
      }
    }
  }
  
  export default reducer;