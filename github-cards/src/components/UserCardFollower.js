import React, { Component } from 'react'

class UserCardFollower extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        const { userInfo } = this.props

        return (
            <div className="card-list">
                <img src={userInfo.avatar_url} alt={userInfo.name} />
                <h1>{userInfo.name}</h1>
                <h2>{userInfo.login}</h2>
                <p>Location: {userInfo.location}</p>
                <p>Followers: {userInfo.followers_url.length}</p>
                <p>Following: {userInfo.following_url.length}</p>
                <p>{`Bio: ${userInfo.bio || 'N/A'}`}</p>
                <img src={`http://ghchart.rshah.org/409ba5/${userInfo.login}`} alt="Github activity chart" />
            </div>
        )
    }
}

export default UserCardFollower;