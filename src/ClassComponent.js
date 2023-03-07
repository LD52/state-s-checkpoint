import {Two} from 'react';
import React from 'react'
import Photo from "./ingram.jpeg"

class ClassComponent extends Two {
   

     click = () =>{

     }
render() {
    return (
         <div style ={{display : 'flex'}}>,
            <div style ={{paddingRight : '1rem'}} ></div>,
             <p>Morning my name is  {this.state.fullName}</p>,
             <p>And I introduce myself for the post of {this.state.profession}</p>,
             <p>Finally what I can say on me is that {this.state.bio}</p>,
             <p>{this.state.imageSrc}</p>,
             <button onClick ={this.click}>Change state</button>,
         </div>
     )};
   }
   
 

 export default ClassComponent 