import React, { Component } from 'react';
// import Todo from './Todo';
import { Input } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import { Button } from 'semantic-ui-react'


class SearchForm extends Component {
    constructor() {
        super();
        this.state = {
            searchedUser: ''
        };
    }
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.updateSearchedUser(this.state.searchedUser);
        this.setState({ searchedUser: '' });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="search-box">
                    <Input icon='search' placeholder='Search...'
                        name="searchedUser"
                        value={this.state.searchedUser}
                        onChange={this.handleChange} />

                    <Button type="submit">Search</Button>
                </form>
            </div>
        )
    }
}

export default SearchForm;