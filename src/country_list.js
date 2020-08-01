import React, {useEffect} from 'react'
import styled from 'styled-components'
import Country from './country' 
import {useSelector, useDispatch} from 'react-redux' //hook

//grid
const CountryListStyled = styled.div`
    display: grid;
    grid-row-gap: 2.3em;
    background: var(--background);
    justify-content: center;
    border: 1px solid red;
    padding: 4em 2em;
`


function CountryList(){
    const dispatch = useDispatch()
    
    const countryListByName = useSelector((state) => state.countryListByName)

    const countryList = useSelector((state) => {
        if ('' !== state.filterByRegion) {
          return state.countryListByRegion;
        }
        if(countryListByName.length > 0){
            return countryListByName
        }
        return state.countryList;
    })

    console.log(">> ",countryList);
    
    //hook
    useEffect( ()=> {
        fetch('https://restcountries.eu/rest/v2/all')
        .then( (response)=>{
            return response.json();
        })
        .then( (data)=> {
            dispatch({
                type: 'SET_COUNTRY_LIST',
                payload: data
            })
            console.log("my data:",data.length);
        })
        .catch(()=>{
            console.log("Error fetching data country")
        })
    }, [dispatch])


  return (
    <CountryListStyled>
        {
             countryList.map( ({flag, name, region, population,capital})=>{
                return(
                    <Country
                    img = {flag}
                    name = {name}
                    population={population}
                    region={region}
                    capital={capital}
                    />
                )
            })
        }
    </CountryListStyled>
  )
}
 
export default CountryList
 