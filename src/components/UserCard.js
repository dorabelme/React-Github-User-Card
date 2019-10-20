import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import './usercard.scss';

class UserCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        const { userInfo } = this.props

        return (
            <Card> 
                <Image src={userInfo.avatar_url} alt={userInfo.name} size='small' wrapped circular />
                <Card.Content>
                    <Card.Header to={userInfo.html_url}><a href={userInfo.html_url}>{userInfo.name}</a></Card.Header>
                    <Card.Meta><a href={userInfo.html_url}>{userInfo.login}</a></Card.Meta>
                    <Card.Meta>{`Location: ${userInfo.location || 'N/A'}`}</Card.Meta>
                    <Card.Description>{`Bio: ${userInfo.bio || 'N/A'}`}</Card.Description>
                    <Image src={`http://ghchart.rshah.org/409ba5/${userInfo.login}`} alt="Github activity chart" wrapped />
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon name='user' />
                        {userInfo.followers} Followers
                    </a>
                    <a>
                        <Icon name='user' />
                        {userInfo.following} Following
                    </a>
                </Card.Content>
            </Card>
        )
    }
}

export default UserCard;
