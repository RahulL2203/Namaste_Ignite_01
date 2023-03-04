import React from "react";
import ReactDOM from "react-dom/client";


//React.createElement => Object => HTML(Dom)

const heading = React.createElement(
   "h1",
   {
      id:"title",
      key:"1234"
   },
   "Heading1"
   );
 //JSX => React.createElement => Object =>HTML(Dom)

 const title=(
   <h1 id="title" key="232">
      Namaste JSX</h1>
 );

 //React Components

// -Funtional Components - New
// -Class Based Components - Old

//Name of the Component Always start with Capital Letter -  It's not Mandatory but a Good Practice

const HeaderComponent = () => {
   return(
      <div>
         {title}
         {console.log("Any Piece of Java Script code, Calculations & Everything can be written here")}
         <h1>Namaste React Funtional Component</h1>
         <h2>Yeahhhhh!!!!!!!!!!!1</h2>
      </div>
   );
};

//Both are Same   
const HeaderComponent2 = () => (     
    <div>
         <h1>Namaste React Funtional Component</h1>
         <h2>Yeahhhhh!!!!!!!!!!!1</h2>
      </div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(< HeaderComponent />);