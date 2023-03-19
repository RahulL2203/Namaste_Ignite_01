import { useState } from "react";
import Logo from "../Assets/Imgs/Food_Villa.png";
import {Link} from "react-router-dom";
import useOnline from "../Utils/useOnline";

const Title = () => (
   <a href="/">
   <img 
     className="h-20 py-5 rounded-full"
     alt ="logo"
     src= {Logo}/>
   </a>
 );

 const Header = () => {

  const [isLoggedIn,setIsLoggedIn] = useState(false);

  const isOnline = useOnline();
  return(
     <div className="flex justify-between bg-blue-100 text-black shadow-xl sm:bg-gray-500 sm:text-white md:bg-purple-900 text-white">
      <Title/>
       <div className="nav-items">
           <ul className="flex py-10">
           
             <li className="px-2"><Link to ="/">Home</Link></li>
             <li className="px-2"><Link to ="/about">About</Link></li>
             <li className="px-2"><Link to ="/contact">Contact</Link></li>
              <li className="px-2">Cart</li>
              <li className="px-2"><Link to ="/instamart">Instamart</Link></li>
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
