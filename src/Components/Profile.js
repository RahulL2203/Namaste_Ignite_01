import {useState} from "react";
const Profile = (props) => {

   const[count, SetCount]= useState(0);
   return (
      <div>
         <h2>This is a Profile Component</h2>
         <h3>Name:{props.name}</h3>
         <h3>Count:{count}</h3>
         <button onClick={()=>{
            SetCount(3);
         }}>
            
         SetCount</button>
      </div>
   );
};

export default Profile;