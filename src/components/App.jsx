import React, { Component, component } from 'react';
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }



    render() { 
        return ( 
            <div>
                <h1>Hello World!</h1>
                <VideoSearch />
            </div>
         );
    }
}
 
export default App;