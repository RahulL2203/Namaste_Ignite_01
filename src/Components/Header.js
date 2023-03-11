import { useState } from "react";


const loggedInUser = () => {
  //API call to check Authentication
  return true;
};

const Title = () => (
   <a href="/">
   <img 
     className="logo"
     alt ="logo"
     src="https://scontent.fhyd2-2.fna.fbcdn.net/v/t39.30808-6/302441959_486213156849687_1897954130219057783_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=3DAXNLwyflAAX8uF5Tx&_nc_ht=scontent.fhyd2-2.fna&oh=00_AfAB7k7ah7PdLfxRbJH4r4k9oLu3uS4oif38FujgAbMNpQ&oe=641034A4" />
   </a>
 );

 const Header = () => {

  const [isLoggedIn,setIsLoggedIn] = useState(false);
  return(
     <div className="header">
      <Title/>
       <div className="nav-items">
           <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Cart</li>
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

       {isLoggedIn ? (<button onClick={()=>setIsLoggedIn(false)}>LogOut</button>
       ): (
          <button onClick={()=>setIsLoggedIn(true)}>Login</button>) }
   
      
     </div>
  );
};

 export default Header;
