import React from 'react';
import './App.css';

import UserCard from './components/UserCard';
import UserList from './components/UserList';
import SearchForm from './components/SearchForm';
import Navbar from './components/Navbar';

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
    this.fetchUserInfo(true);
    this.fetchFollowers(true);
  }

  updateSearchedUser = (string) => {
    this.setState({ user: string })
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

  componentDidUpdate(prevProps, prevState) {
    if (prevState.user !== this.state.user) {
      this.fetchUserInfo(false);
      this.fetchFollowers(false);
    }
  }

  async getInfoForUser(login) {
    const promise = await fetch(`https://api.github.com/users/${login}`, {
      headers: {
        'Authorization': `token ${process.env.REACT_APP_token}`,
      }
    })
      .then(res => res.json())
	  return promise;
}

  fetchUserInfo = (useCache) => {
    const currentUserStr = localStorage.getItem('currentUser')

    if (currentUserStr !== null && useCache )  {
      const currentUser = JSON.parse(currentUserStr);
      console.log(currentUser);
      this.setState({ userInfo: currentUser })
    } else {
      this.getInfoForUser(this.state.user)
        .then(githubInfo => {
          this.setState({ userInfo: githubInfo })
          localStorage.setItem('currentUser', JSON.stringify(githubInfo))
          }
        )       
        .catch(err => console.log(err));
    }
  }

  fetchFollowers = (useCache) => {
    const currentFollowersStr = localStorage.getItem('currentFollowers')

    if (currentFollowersStr !== null && useCache ) {
      const currentFollowers = JSON.parse(currentFollowersStr);
      console.log(currentFollowers);
      this.setState({ followers: currentFollowers });
    } else {
      fetch(`https://api.github.com/users/${this.state.user}/followers`)
        .then(res => res.json())
        .then(followerInfo => {
          const arrayOfPromises = followerInfo.map(follower => this.getInfoForUser(follower.login))
          const promiseOfArray = Promise.all(arrayOfPromises)

          const finalPromise = promiseOfArray
            .then(array => {
              this.setState({ followers: array })
              localStorage.setItem('currentFollowers', JSON.stringify(array))
            })
            .catch(err => console.log(err))

          return finalPromise;
        }
        ).catch(err => console.log(err));
    }
  }


  render() {
    console.log(this.userInfo)
    return (
      <div className="App">
        <Navbar updateSearchedUser={this.updateSearchedUser} />        
        <UserCard userInfo={this.state.userInfo} />
        <UserList followers={this.state.followers} />
      </div>
    )
  };
}

export default App;
