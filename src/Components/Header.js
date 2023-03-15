import { useState } from "react";
import Logo from "../Assets/Imgs/Food_Villa.png";
import {Link} from "react-router-dom";
import useOnline from "../Utils/useOnline";

const Title = () => (
   <a href="/">
   <img 
     className="logo"
     alt ="logo"
     src= {Logo}/>
   </a>
 );

 const Header = () => {

  const [isLoggedIn,setIsLoggedIn] = useState(false);

  const isOnline = useOnline();
  return(
     <div className="header">
      <Title/>
       <div className="nav-items">
           <ul>
           
             <li><Link to ="/">Home</Link></li>
             <li><Link to ="/about">About</Link></li>
             <li><Link to ="/contact">Contact</Link></li>
              <li>Cart</li>
              <li><Link to ="/instamart">Instamart</Link></li>
           </ul>
       </div>
       {/*
          Within these braces we can Write JS expressions only but not Statements 
          //Below are statements - Not allowed
          let a=10;
          console.log(a); 

          //The above statements can be written as Expressions like this

          ((let a=10),console.log(a));
       */}

       <h1>{isOnline? "🟢": "🔴"}</h1>

       {isLoggedIn ? (<button onClick={()=>setIsLoggedIn(false)}>LogOut</button>
       ): (
          <button onClick={()=>setIsLoggedIn(true)}>Login</button>) }
   
      
     </div>
  );
};

 export default Header;
