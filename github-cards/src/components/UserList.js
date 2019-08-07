import React from 'react';
import UserCard from './UserCard';
// import UserCardFollower from './UserCardFollower';
import '../index.css';

const UserList = (props) => {
    return (
        <div>
            <h3 className="title">Followers:</h3>
            <div className="follower-container">
            {props.followers.map((follower) => <UserCard key={follower.id} userInfo={follower}/>)}
                {console.log(props.followers)}
            </div>
        </div>
    )
}


export default UserList;
