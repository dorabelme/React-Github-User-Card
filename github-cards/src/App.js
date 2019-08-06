import React from 'react';
import './App.css';

import UserCard from './components/UserCard';
import UserList from './components/UserList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userInfo: {},
      user: 'dorabelme',
      followers: []
    };
  }

  componentDidMount() {
    this.fetchUserInfo();
    this.fetchFollowers();
  }

  // fetchUserInfo = () => {
  //   fetch(`https://api.github.com/users/${this.state.user}`)
  //     .then(res => res.json())
  //     .then(githubInfo => this.setState({ userInfo: githubInfo }))
  //     .catch(err => console.log(err));
  // }

  // fetchFollowers = () => {
  //   fetch(`https://api.github.com/users/${this.state.user}/followers`)
  //     .then(res => res.json())
  //     .then(followerInfo =>  this.setState({ followers: followerInfo }))

  //     .catch(err => console.log(err));
    
  // }

  getInfoForUser(login) {
    const promise = fetch(`https://api.github.com/users/${login}`).then(res => res.json())
	  return promise;
}

  fetchUserInfo = () => {
    this.getInfoForUser(this.state.user)
      .then(githubInfo => this.setState({ userInfo: githubInfo }))
      .catch(err => console.log(err));
  }

// const [followers, setFollowers] = some state stuff here;

  fetchFollowers = () => {
    fetch(`https://api.github.com/users/${this.state.user}/followers`)
    .then(res => res.json())
        .then(followerInfo => {
          const arrayOfPromises = followerInfo.map(follower => this.getInfoForUser(follower.login))
          const promiseOfArray = Promise.all(arrayOfPromises)

          const finalPromise = promiseOfArray
            .then(array => this.setState({ followers: array }))
            .catch(err => console.log(err))

          return finalPromise;
        }
        ).catch(err => console.log(err));
  }


  render() {
    return (
      <div className="App">
        <UserCard userInfo={this.state.userInfo} />
        <UserList followers={this.state.followers} />
      </div>
    )
  };
}

export default App;
