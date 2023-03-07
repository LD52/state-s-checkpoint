import './App.css';
import { Component} from 'react';
import Pic from './ingram.jpeg';
import Art from './photo.jpeg';

class App extends Component {

state ={
  fullName : '',
  profession : '', 
  bio : '', 
  imageSrc : <img src= {Art} alt= ''/>, 
  alt : 'emptyPhoto',
}
show = false

Profile = () =>{
  if (this.show === false ){
     document.querySelector('button').innerHTML = 'Hide profil'
     this.setState ({
      fullName : 'Luca-David',
      profession : 'Soccer Coach',
      bio : "I'm soccer coach.",
      imageSrc : <img src ={Pic} alt = ''/>,
      alt : 'myPhoto'
     })
     this.show = true 
  }
  
 
else {
  document.querySelector('button').innerHTML = 'Show profil';
  this.setState ({
    fullName : '',
    profession : '',
    bio : '',
    imageSrc : <img src={Art} alt =''/>,
    alt : 'emptyPhoto', 
  })
  this.show = false 
}
}

render(){
  return (
    <>
    <div  className = 'root'>

       <div className='person'>
        <div className='person-right'>
          <p>Morning my name is  {this.state.fullName}</p>
          <p> What I can say on myself is that {this.state.bio}</p>
          <p> And I introduce myself for the post of {this.state.profession}</p>
        </div>
        <img src={this.state.imageSrc} alt={this.state.alt} className='person-left' />
      </div>
      <div className='button-display-container'>
        <button onClick={this.Profile}>Afficher profil</button>
      </div>
    </div>
    </>
  );
}
  }

export default App;
