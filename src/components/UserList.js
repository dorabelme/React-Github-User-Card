import React from 'react';
import UserCard from './UserCard';
import './navbar.scss';
import '../index.css';

const UserList = (props) => {
    return (
        <div className="title">
            <h3>Followers:</h3>
            <div className="follower-container">
            {props.followers.map((follower) => <UserCard key={follower.id} userInfo={follower}/>)}
                {console.log(props.followers)}
            </div>
        </div>
    )
}


export default UserList;
