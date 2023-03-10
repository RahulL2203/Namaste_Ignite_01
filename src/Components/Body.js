//No key (not accaeptable) <<<index Key (Last Option)<<< Unique Key (best practice)
import { restaurantList } from "../Constants";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";


function  filteredData(searchText, restaurants){
  const filteredData = restaurants.filter((whatever)=> whatever.data.name.includes(searchText)
   );
   return filteredData;
}

const Body = () => {
   const [restaurants,setRestaurants] = useState(restaurantList)
   const [searchText, setSearchText] = useState(""); //returns = [Variable Name , Function to update the variable]
   
   return(
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
               const data = filteredData(searchText, restaurants);
               //Update the state - restaurants
               setRestaurants(data);
               
            }}>Search</button>

         </div>
         <div className="restaurant-list">
          {restaurants.map((restaurant)=>{
            return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          })}
    
         </div>
    </>

      );
};

export default Body;