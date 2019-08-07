import React from 'react';
import { Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './navbar.scss';
import SearchForm from './SearchForm';

function Navbar(props) {
    return (
        <div className="navbar">
            <Icon name='github' size='large' alt="Github logo">Github Finder</Icon>
            <SearchForm updateSearchedUser={props.updateSearchedUser} />
        </div>
    )
}

export default Navbar;
