import React from 'react';
import logo from './logo.svg';
import './App.css';
//start of my imports\\
import axios from "axios";
import UserCard from "./Components/UserCard";
import FollowersCard from "./Components/FollowersCard"

class App extends React.Component {
  // start of my state
  state = {
    userData: [],
    followersData: []
  }

  componentDidMount() {
    // start of user data promise
    axios
      .get("https://api.github.com/users/shighetari")
      .then(response => {
        this.setState({
          userData: response.data
        })
        console.log(response.data)
      })
      .catch(error => {
        debugger
        console.log(error)})
    // start of followers promise
    axios
      .get("https://api.github.com/users/shighetari/followers")
      .then(response => {
        this.setState({
          followersData: response.data
        })
        console.log(response.data)
      })
  }


  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            React GitHub User Card
        </p>
          {/* Start of my components */}
          <UserCard userData={this.state.userData} ></UserCard>

          <FollowersCard followersData={this.state.followersData}></FollowersCard>
          {/* end of my components */}
          <a
            className="App-link"
            href="https://github.com/shighetari"

          >
            Francisco's Github
        </a>
        </header>
      </div>
    );
  }
}
export default App;
