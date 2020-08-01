import React from 'react'
import styled from 'styled-components'
import Search from './search'
import { Region as FilterByRegion } from './region'


const ActionListStyled = styled.div`
  .grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 20px;
  }
  @media screen and (min-width: 768px) {
    .grid {
      grid-template-columns: 480px 1fr 164px;
    }
  }
`

function ActionList() {
  return (
    <ActionListStyled>
      <Search />
      <span></span>
      <FilterByRegion />
    </ActionListStyled>
  )
}

export default ActionList