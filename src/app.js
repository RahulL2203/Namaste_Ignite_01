import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";



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
       <Body/>
       <Footer/>
      </React.Fragment>
   );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(< AppLayout />);