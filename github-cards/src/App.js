import React from 'react';
import './App.css';

import UserCard from './components/UserCard';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userInfo: {},
      user: 'dorabelme'
    };
  }

  componentDidMount() {
    this.fetchUserInfo();
  }

  fetchUserInfo = () => {
    fetch(`https://api.github.com/users/${this.state.user}`)
      .then(res => res.json())
      .then(githubInfo => this.setState({ userInfo: githubInfo }))
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.fetchUserInfo)
    console.log(this.state.userInfo)
    return (
      <div className="App">
        <UserCard userInfo={this.state.userInfo} />
      </div>
    )
  };
}

export default App;
