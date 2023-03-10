import { IMG_CDN_URL } from "../Constants";

const RestaurantCard = ({name,lastMileTravelString,cuisines,cloudinaryImageId,avgRating}) =>{

   return(
      <div className="card">
         <img src = {IMG_CDN_URL + 
            cloudinaryImageId} 
         />
         <h2>{name}</h2>
         <h3>{lastMileTravelString}</h3>
         <h3>{cuisines.join(", ")}</h3>
   
         <h4>{avgRating} Stars</h4>
      </div>
   )
}

export default RestaurantCard;