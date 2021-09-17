import React, { Component } from 'react';
import './SearchBox.css';

class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        }
    }


    handleChange = (event) => {
        this.setState({search: event.target.value})
    }


    render() {
        return (
            <div className='searchbox'>
            <input onChange={this.handleChange} type="text" placeholder='What would you like to watch?' className="search"/><br /><br />
            <button>Search</button>
        </div>
        );
    }
}

export default SearchBox;
