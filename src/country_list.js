import React, {useEffect, useState} from 'react'
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
    
    const countryList = useSelector( (state) => state.countryList);

    const [inputValue, setInputValue] = useState('')
    const countryListByName = useSelector((state) => state.countryListByName)


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

    /* FILTER BY NAME STATES */
    const filterByName = (e) =>{
        setInputValue(e.target.value)
        dispatch({
          type: 'FILTER_BY_NAME',
          payload: e.target.value
        })
      }
      const clearInput = () => {
        dispatch({
          type: 'FILTER_BY_NAME',
          payload: ''
        })
        setInputValue('')
      }

  return (
    <CountryListStyled>
        
        <input type="text" value={inputValue} onChange={filterByName} />
            {
                inputValue 
            }
            {
                countryListByName.length === 0 && inputValue &&
                <p>
                    <strong>{inputValue}</strong> Not found in countries
                </p>
            }
        
        {
             (countryListByName.length > 0 ? countryListByName : countryList).map( ({flag, name, region, population,capital})=>{
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
 