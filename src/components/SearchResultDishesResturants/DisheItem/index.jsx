import React from 'react'
import {
    StyledDisheItem,
    StyledImage,
    StyledDisheItemInfo,
    StyledDisheItemAdd

} from './style';
import {useCart} from '../../../provider/cart'
function DisheItem({item}) {
    const {
        state: {cart},
        dispatch,
    } = useCart();
   
  return (
    <StyledDisheItem>
        <StyledImage>
            <img src={item.image}/>
        </StyledImage>
        <StyledDisheItemInfo>
            <h3>{item.name}</h3>
            <p>{item.price} Birr</p>
        </StyledDisheItemInfo>
        <StyledDisheItemAdd onClick={()=>{
            dispatch({
                type:'Add'
            })
        }}>
            <p>Add</p>
        </StyledDisheItemAdd>
    </StyledDisheItem>
  )
}

export default DisheItem