import { IMG_CDN_URL } from "../Constants";

const RestaurantCard = ({name,lastMileTravelString,cuisines,cloudinaryImageId,avgRating}) =>{

   return(
      <div className="w-56 p-2 m-2 shadow-lg bg-blue-100">
         <img src = {IMG_CDN_URL + 
            cloudinaryImageId} 
         />
         <h2 className="font-bold text-xl">{name}</h2>
         <h3>{lastMileTravelString}</h3>
         <h3>{cuisines.join(", ")}</h3>
   
         <h4>{avgRating} Stars</h4>
      </div>
   )
}

export default RestaurantCard;