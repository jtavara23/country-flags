import React, {useState} from 'react'
import styled from 'styled-components'
import Input from './input'
import {useDispatch} from 'react-redux'

const SearchStyled = styled.div``

function Search(){
    const [inputValue, setInputValue] = useState('')
    const dispatch = useDispatch()


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
        <SearchStyled>
            {
                inputValue  && <button onClick={clearInput}>X</button>
            }
            <Input placeholder = 'Search a Country' value={inputValue} onChange={filterByName} />
        </SearchStyled>
    )
}
 
export default Search
 