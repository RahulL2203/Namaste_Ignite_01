//No key (not accaeptable) <<<index Key (Last Option)<<< Unique Key (best practice)
import { restaurantList } from "../Constants";
import RestaurantCard from "./RestaurantCard";
import { useState , useEffect } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import {filteredData} from "../Utils/Helper";
import useOnline from "../Utils/useOnline";





const Body = () => {

   const [allRestaurants,setAllRestaurants] = useState([]);
   const [filteredRestaurants,setFilteredRestaurants] = useState([]);
   const [searchText, setSearchText] = useState(""); //returns = [Variable Name , Function to update the variable]
   
   //Empty Dependency Array => once after initial render
   //dep array[searchText] => once after Initial render + everytime after re-render(my searchText Changes)
   useEffect(() => {
      //API Call
      getRestaurants();
   }, [])

   async function getRestaurants(){
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.5002987&lng=78.396665&page_type=DESKTOP_WEB_LISTING");
      const json = await data?.json();
    
      setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      
   }

   const isOnline = useOnline();
   if(!isOnline){
      return<h1>Offline , please check ur Internet Connection</h1>
   }
  if(!allRestaurants) return null;

 // if(filteredRestaurants?.length===0)
   // return <h1>No Restaurants matches ur Search ..!!!!</h1>;

   return(allRestaurants?.length===0) ? <Shimmer/> : 
   (
      <>
         <div className="search-container p-5 bg-blue-100 my-5">
            <input type = "text" 
            className="focus:outline-none focus:ring focus:ring-blue-500 rounded-md" 
            placeholder="Restaurant Name here..." 
            value ={searchText}
            onChange = {(e)=>{
               setSearchText(e.target.value);
             }}
            />

            <button className="m-1 bg-black hover:bg-gray-600 rounded-lg text-white"
            onClick={()=>{
               //Need to filter the data
               const data = filteredData(searchText, allRestaurants);
               //Update the state - restaurants
               setFilteredRestaurants(data);
               
            }}>Search</button>

         </div>
         <div className="flex flex-wrap">
          {filteredRestaurants.map((restaurant)=>{
            return (
            <Link to ={"/restaurant/" + restaurant.data.id}  key={restaurant.data.id}>
               <RestaurantCard {...restaurant.data} />
            </Link>)
          })}
    
         </div>
    </>

      );
};

export default Body;