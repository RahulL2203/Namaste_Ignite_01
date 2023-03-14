//import { Outlet } from "react-router-dom";
//Without {Outlet} also we can make it work by importing  & replacing Profile component in this page
import ProfileFunctionalComponent from "./Profile";
import Profile from "./ProfileClass";
import {Component} from "react";


class About extends Component{
   constructor(props){
      super(props);
     
     // console.log("Parent-Constructor");
    }

    componentDidMount(){
   //  console.log("Parent-componentDidMount");
   }

   render(){

      //console.log("Parent-render");
      return(
         <div>
            <h1>About US Page </h1>
            <p>This is About Us component , Let's add more stuf Later..........</p>
            {/*<Outlet/>
              <ProfileFunctionalComponent name={"Functional_Name"}/>
            */}
            
             <Profile name={"Class_Name"}/>
   
         </div>
      );

   }
}
export default About;