import React from 'react';
import {
    StyledImage,
    StyledResturantItemInfo,
    StyledResturantItem,
    StyledResturantItemInfoLeft,
    StyledResturantItemInfoRight

} from './style'

function ResturantItem({item}) {
  return (
    <StyledResturantItem>
        <StyledImage>
            <img src={item.restaurantImage}/>
            <p>Open</p>
        </StyledImage>
        <StyledResturantItemInfo>
            <StyledResturantItemInfoRight>
                <h1>{item.restaurantName}</h1>
                <h3>{item.cuisines.split('.').join('')}</h3>
                <p>{item.time} mins</p>
            </StyledResturantItemInfoRight>
            <StyledResturantItemInfoLeft>
                <p>{item.averageReview}</p>
            </StyledResturantItemInfoLeft>
        </StyledResturantItemInfo>
    </StyledResturantItem>
  )
}

export default ResturantItem