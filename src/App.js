import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

// GitHub usernames: gaearon, sophiebits, sebmarkbage, bvaughn

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
  handleSubmit = async (event) => {
    event.preventDefault();
    const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`);
    this.props.onSubmit(resp.data);
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
    profiles: [],
  };

  addNewProfile = (profileData) => {
    this.setState(prevState => ({
        profiles: [...prevState.profiles, profileData],
    }));
  }
  
  render() {
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addNewProfile}/>
        <CardList profiles={this.state.profiles}/>
      </div>
    );
  }
}
export default App;