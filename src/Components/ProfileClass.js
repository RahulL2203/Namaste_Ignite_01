import React from "react";

class Profile extends React.Component{


   constructor(props){
      super(props);
      //Create State here
      this.state = {
         userInfo:{
            name:"Dummy Name",
            location:"Dummy Location",
          },

      };
      console.log("child-constructor" + " "+ this.props.name);
   }

   async componentDidMount(){

      const data =await fetch("https://api.github.com/users/rahulL2203");
      const json= await data.json();
      console.log(json);
      this.setState({
         userInfo: json,
      });
      //API Call here 
      console.log("child-ComponentDidMount"+ " "+this.props.name);
   }

   componentDidUpdate(){

      console.log("Component Did Update");
   }

   componentWillUnmount(){
      console.log("Component Will Unmount");
   }
   render(){
      const { count } = this.state; //Destructuring

      console.log("child-render" + " "+this.props.name);

      return (
        <div>      
         <h1>Profile Classsssss Component</h1>
         <h3>Name:{this.state?.userInfo?.name}</h3>
         <h3>Location:{this.state?.userInfo?.location}</h3>
        
         
      </div>
      );
   }
}



/****
 **   Child Constructor
 **   Child Render
 **   Child Component Did Mount
 **   
 **
 **  API Call
 **  Set State
 **
 **   <UPDATE CYCLES>
 **   Child Render
 **   
 **   Here Updates the DOM
 **
 **   Component Did Update
 ****/

export default Profile;