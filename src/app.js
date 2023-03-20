import React, { Children ,lazy ,Suspense, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";

import Error from "./Components/Error";
import Contact from "./Components/Contact";
import RestaurantMenu from "./Components/RestaurantMenu";
import {createBrowserRouter , RouterProvider, Outlet} from "react-router-dom";
import Profile from "./Components/Profile";
import Shimmer from "./Components/Shimmer";
import UserContext from "./Utils/UserContext";


/*
   Header
      -Title
      -NavItems(RightSide)
      -Cart
   Body
      -SearchBar
      -RestaurantList
         -RestaurantCard
            -Image
            -Name
            -Rating
            -Cuisines
   Footer
      -Links
      -CopyRights

*/


//Chunking
//Code Splitting
//Lazy Loading
//Dynamic Loading
//On Demand Loading
//Dynamic Import

const Instamart = lazy(() => import("./Components/Instamart"));

//Upon On Demand Loading --> upon render -->suspend loading

const About = lazy(() => import("./Components/About"));
const AppLayout = () => {

   const[user,setUser]=useState({
      name:"Rahul_Lakkavarapu",
      email:"rs@gmail.com"

   })
   return(
      <UserContext.Provider value={{
         user:user, //Overriding the default
         setUser:setUser,
      }}>
       <Header/>
       <Outlet/>
       <Footer/>
      </UserContext.Provider>
   );
};

const appRouter = createBrowserRouter([
   {
      path:"/",
      element: <AppLayout/>,
      errorElement:<Error/>,
      children: [
         {
            path:"/",
            element:<Body/>,
         
         },
         {
            path:"/about",
            element:<Suspense fallback={<h1>Loading............</h1>}>
               <About/>
               </Suspense>,
            children: [
               {
               path:"profile",   // Parent Path/{path} ==>localhost:1234/about/profile
               element:<Profile/>,
                }]
        
         },
         {
            path:"/contact",
            element:<Contact/>,
         
         },
         {
            path:"/restaurant/:resId",
            element:<RestaurantMenu/>,
          
         },
         {
            path:"/instamart",
            element:<Suspense fallback={<Shimmer/>}>
               <Instamart/>
               </Suspense>,
          
         }

      ],
   },
   
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(< RouterProvider router= {appRouter} />);