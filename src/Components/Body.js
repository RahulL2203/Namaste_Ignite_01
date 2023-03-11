//No key (not accaeptable) <<<index Key (Last Option)<<< Unique Key (best practice)
import { restaurantList } from "../Constants";
import RestaurantCard from "./RestaurantCard";
import { useState , useEffect } from "react";
import Shimmer from "./Shimmer";


function  filteredData(searchText, restaurants){
  const filteredData = restaurants.filter((whatever)=> 
      whatever?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
   );
   return filteredData;
}

const Body = () => {

   const [allRestaurants,setAllRestaurants] = useState([]);
   const [filteredRestaurants,setFilteredRestaurants] = useState([]);
   const [searchText, setSearchText] = useState(""); //returns = [Variable Name , Function to update the variable]
   
   //Empty Dependency Array => once after initial render
   //dep array[searchText] => once after Initial render + everytime after re-render(my searchText Changes)
   useEffect(() => {
      //API Call
      getResaturants();
   }, [])

   async function getResaturants(){
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.5002987&lng=78.396665&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      console.log(json);
      setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      
   }

   console.log("render");
  if(!allRestaurants) return null;

  if(filteredRestaurants?.length===0)
   return <h1>No Restaurants matches ur Search ..!!!!</h1>;

   return(allRestaurants?.length===0) ? <Shimmer/> : 
   (
      <>
         <div className="search-container">
            <input type = "text" 
            className="search-input" 
            placeholder="Search" 
            value ={searchText}
            onChange = {(e)=>{
               setSearchText(e.target.value);
             }}
            />

            <button className="search-btn"
            onClick={()=>{
               //Need to filter the data
               const data = filteredData(searchText, allRestaurants);
               //Update the state - restaurants
               setFilteredRestaurants(data);
               
            }}>Search</button>

         </div>
         <div className="restaurant-list">
          {filteredRestaurants.map((restaurant)=>{
            return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          })}
    
         </div>
    </>

      );
};

export default Body;