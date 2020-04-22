import React, { Component } from 'react';
import './App.css';

// Use this data for premier test  
const testData = [
  {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
  {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
  {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
];

// Create card list component 
const CardList = (props) => {
  return(
    <div>
    {testData.map((profile)=>{
      return(
        <Card {...profile} />
      )
    })}
  </div>
  )
}
// Create form Componenet 
class Form extends React.Component{
  render(){
    return(
      <form action="">
        <input type="text" placeholder="Github username">
        </input>
        <buttton> Add Card</buttton>
      </form>
    );
  }
}
// Create card component 
class Card extends React.Component{
  render(){
    const profile = this.props;

    return(
      <div className="github-profile">  
        <img src={profile.avatar_url}/> 
        <div className="info">
        <div className="name"> {profile.name}</div>
        <div className="company"> {profile.company}</div>
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
        <Form/>
        <CardList />
      </div>
    );
  }
}
export default App;