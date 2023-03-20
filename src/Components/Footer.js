import { useContext } from "react";
import UserContext from "../Utils/UserContext";
const Footer = () => {

   const{user} = useContext(UserContext);
   return(
      <h1 className="p-10 m-10 font-i">This Site is developed by {user.name} -{user.email} </h1>
   );
};

export default Footer;