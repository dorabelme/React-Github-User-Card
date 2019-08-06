import React, { Component } from 'react'

class UserCard extends Component {
    constructor(props) {
        super(props)  
        this.state = {
        }
    }
    
    render() {
        const { userInfo } = this.props
        
        return (
            <div className="card-list">
                <img src={userInfo.avatar_url} />
                <h1>{userInfo.name}</h1>
                <h2>{userInfo.login}</h2>
                <p>Location: {userInfo.location}</p>
                <p>Followers: {userInfo.followers}</p>
                <p>Following: {userInfo.following}</p>
                <p>{`Bio: ${userInfo.bio || 'N/A'}`}</p>
                <img src={`http://ghchart.rshah.org/409ba5/${userInfo.login}`} />       
            </div>
        )
    }
}

export default UserCard
