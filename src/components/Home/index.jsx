import React ,{useState,useEffect}from 'react'
import Header from '../Header/index';
import { StyledSearchResult } from './style';
import SearchResult from '../SearchResult/index';
import SearchResultDishesResturants from '../SearchResultDishesResturants/index';
import {fetchApi} from '../../utils/fetchApi'
function Home() {
    const [query, setQuery] = useState('')
    const [option, setOption] = useState('Restaurants');
    const [resturants, setResturants] = useState([])
    const [dishes, setDishes] = useState([])
    const [loading, setLoading] = useState(true)
    console.log(Boolean(query))
  
    useEffect(() => {
        if(Boolean(query)){
            fetchApi(query).then((data)=>{
                console.log(data)
                setLoading(true)
                setDishes(data.listDishes);
                setResturants(data.listRestaurants)
                setLoading(false)
               
            })
        }
        else{
            setDishes([]);
            setResturants([])
            setLoading(true)

        }
    }, [query])
 
  return (
    <>
    <Header
    query={query}
    setQuery={setQuery}
    />
    {
        loading==true || query==''?<></>:
        <StyledSearchResult>
            <SearchResult
             query={query} 
             resturants={resturants}
             dishes={dishes}
             />
            <SearchResultDishesResturants
            option={option}
            setOption={setOption}
            resturants={resturants}
            dishes={dishes}
            />
     </StyledSearchResult>
    }
    </>
  )
}

export default Home;