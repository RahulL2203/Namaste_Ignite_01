import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Error from "./Components/Error";
import Contact from "./Components/Contact";
import RestaurantMenu from "./Components/RestaurantMenu";
import {createBrowserRouter , RouterProvider, Outlet} from "react-router-dom";
import Profile from "./Components/Profile";


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

const AppLayout = () => {
   return(
      <React.Fragment>
       <Header/>
      <Outlet/>
       <Footer/>
      </React.Fragment>
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
            element:<About/>,
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
          
         }

      ],
   },
   
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(< RouterProvider router= {appRouter} />);