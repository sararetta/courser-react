import React ,{useState,useEffect}from 'react';
import {
    StyledSearchResultDishesResturants,
    StyledOption,
    StyledOptions,
    StyledDishes,
    StyledResturants
} from './style'
import DisheItem from './DisheItem/index';
import ResturantItem from './ResturantItem/index'

function SearchResultDishesResturants({
    option,
    setOption,
    resturants,
    dishes}) {
            let disheItems=[]
            dishes.map((item)=>{
              return  disheItems=[...disheItems,...item.dishesList]
            })
          
        
    const options=[
        {
            label:'Dishes',
            value:'Dishes'
        },
        {
            label:'Restaurants',
            value:'Restaurants'
        }
    ]
  return (
    <StyledSearchResultDishesResturants>
        <StyledOptions>
        {
            options.map((elem)=>{
                return <StyledOption onClick={()=>{setOption(elem.value)}} isSelected={option==elem.value}> 
                    <p>{elem.label}</p>
                </StyledOption>
            })
        }
        </StyledOptions>
        {
            option==='Dishes'?
            <StyledDishes>
                {
                    disheItems.map((item)=>{
                        return <DisheItem
                            item={item}
                        />
                    })
                }
               
             </StyledDishes> :
             <StyledResturants>
               {resturants.map((item)=>{
                return <ResturantItem
                item={item}/>
               })}
         </StyledResturants>
        }
    </StyledSearchResultDishesResturants>

  )
}

export default SearchResultDishesResturants