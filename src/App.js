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
    {props.profiles.map((profile)=>{
      return(
        <Card {...profile} />
      )
    })}
  </div>
  )
}

// Create form Componenet 
class Form extends React.Component{
  state = {
    userName: '',
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(
        this.state.userName
      )
  }
  render(){
    return(
      // Since we used on Submit method we can use html tags like required ...etc
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Github username" 
        value = {this.state.userName}
        // this way allow React to control things instead of the previous DOM logic
        onChange = {event => this.setState({userName: event.target.value})} // we can the value from the dom directly
        required
        />
        <button> Add Card</button>
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
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     profiles:testData,
  //   };
  // }

  // shorter version class field
  state = {
    profiles: testData,
  };
  
  render() {
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <Form/>
        <CardList profiles={this.state.profiles}/>
      </div>
    );
  }
}
export default App;