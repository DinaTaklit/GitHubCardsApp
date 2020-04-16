import React, { Component } from 'react';
import './App.css';

// Create card component 

class Card extends React.Component{
  render(){
    return(
      <div className="github-profile">  
        <img src="https://placehold.it/75"/> 
        <div className="info">
          <div className="name"> Name here ...</div>
          <div className="company"> Company here..</div>
        </div>
      </div>
    );
  }
}



class App extends Component {
  render() {
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <Card />
      </div>
    );
  }
}
export default App;