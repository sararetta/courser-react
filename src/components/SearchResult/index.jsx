import React from 'react'
import {
    StyledSearch,
} from './style'

function SearchResult({query,resturants,dishes}) {
  const totalDishes=dishes.reduce((total,elem)=>{
    total+=elem.dishesList.length
    return total
  },0)

  return (
    <StyledSearch>
        <h2>{query} result near you <span>{resturants.length} restaurants,{totalDishes} Dishes</span></h2>
    </StyledSearch>
  )
}

export default SearchResult