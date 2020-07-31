import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import Country from './country' 

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

    const [countryList, setCountryList] = useState([]);

    //hook
    useEffect( ()=> {
        fetch('https://restcountries.eu/rest/v2/all')
        .then( (response)=>{
            return response.json();
        })
        .then( (data)=> {
            setCountryList(data);  
            console.log(data);
        })
        .catch(()=>{
            console.log("Error fetching data country")
        })
    }, [])

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
 