import React from 'react';
import UserCard from './UserCard';
import UserCardFollower from './UserCardFollower';

const UserList = (props) => {
    return (
        <div className="array-container">
            <h3>Followers:</h3>
            {props.followers.map((follower) => <UserCard key={follower.id} userInfo={follower}/>)}
            {console.log(props.followers)}
        </div>
    )
}


export default UserList;
