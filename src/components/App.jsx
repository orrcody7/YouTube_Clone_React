import React, { Component, component } from 'react';
import axios from 'axios';
import SearchBox from './SearchBox/SearchBox';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            video: []
        }
    }


    componentDidMount(){
        this.getSearchResult();
    }

    async getSearchResult() {
        console.log('hello')
        let response = await axios.get("https://www.googleapis.com/youtube/v3/search?q=fails&key=AIzaSyDgmnPXqyq2sAWewi9ddbi4RU6zH3mAI54&maxResults=5&video&part=snippet");
        this.setState({
            video: response.data
        })
    }



    render() {
        return (
            <div>
                <h1>Hello World!</h1>
                <SearchBox searchResult={this.state.video} />
            </div>
         );
    }
}

export default App;
