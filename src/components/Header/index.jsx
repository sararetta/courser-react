import React from 'react'
import {
    StyledHeader,
    StyledHeaderSearch,
    StyledSearch,
    StyledCart,
    StyledLogo
} from './style';
import { Icon } from '@iconify/react';
import {useCart} from '../../provider/cart'
function Header({query,setQuery}) {

    const {
        state: {cart},
        dispatch,
    } = useCart();
  return (
    <StyledHeader>
        <StyledLogo>
            <a>
                <img src='logo.jpeg'/>
            </a>
            <Icon icon="fa6-solid:location-dot" color="#16a316" width="18" height="18" />
            <Icon icon="ant-design:down-outlined" color="red" width="15" height="15" />

        </StyledLogo>
       
        <StyledHeaderSearch>
            <StyledSearch>
            <Icon icon="fa:search" color="rgba(0,0,0,0.6)" />
                <input
                 type='text'
                 value={query}
                 onChange={(e)=>{
                    setQuery(e.target.value)
                 }}
                placeholder='Search'
                 />
            </StyledSearch>
            <p>Play game</p>
            <p>Log In</p>
            <StyledCart>
                <Icon
                 icon="bxs:shopping-bag" color="#16a316" 
                 width="29"
                 height="29"/>
                <span>{cart}</span>
            </StyledCart>
        </StyledHeaderSearch>

    </StyledHeader>

  )
}

export default Header