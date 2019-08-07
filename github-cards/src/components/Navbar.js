import React from 'react';
import { Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './navbar.scss';
import SearchForm from './SearchForm';

function Navbar(props) {
    return (
        <div className="navbar">
            <div className="navbar-left">
                <Icon name='github' size='large' alt="Github logo"></Icon>
                <span className='icon-text'>Github User Finder</span>
            </div>
            
            <SearchForm updateSearchedUser={props.updateSearchedUser} />
        </div>
    )
}

export default Navbar;
