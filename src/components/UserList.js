import React from 'react';
import UserCard from './UserCard';
import './navbar.scss';
import './userlist.scss';

const UserList = (props) => {
    return (
        <div>
        {/* // <div className="followers">
        //     <div className="title"> */}
                <h3 className="title" >Followers:</h3>
            {/* // </div> */}
            <div className="follower-container">
                {props.followers.map((follower) => <UserCard key={follower.id} userInfo={follower} />)}
                {console.log(props.followers)}
            </div>
        </div>
    )
}


export default UserList;
