import {useState,useEffect} from "react";
const Profile = (props) => {

   const[count, SetCount]= useState(0);

   useEffect(()=>{
      //API Call
     const timer= setInterval(()=>{
         console.log("Interval from Funtioonal Profile");
      }, 1000);
      console.log("useEffect");
//This return is like ComponentWillUnmount in Use Effect
//This is how we unmount in Functional Components
      return ()=>{
         clearInterval(timer);

      console.log("useEffectReturn");
      }
   }, []);

   console.log("render");

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