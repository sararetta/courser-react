import axios from "axios";

export const fetchApi=async(query)=>{
   try{
    const reponse=await axios.post(('https://staging.tikusdelivery.com/api/searchDishesAndRestaurants'),{
            latitude: "9.003869",
            longitude: "38.780127",
            restaurantName:query,
        
    })
  
    const data=await reponse.data;
    return data;
   }catch(error){
       console.log(error)
   }

}
