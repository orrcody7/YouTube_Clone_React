import React, { Component, component } from 'react';
import axios from 'axios';
import SearchBox from './SearchBox/SearchBox';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }



    render() {
        return (
            <div>
                <h1>Hello World!</h1>
                <SearchBox />
            </div>
         );
    }
}

export default App;
