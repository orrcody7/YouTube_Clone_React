import React, { Component } from 'react';
import './SearchBox.css';
import axios from 'axios'
import PropTypes from "prop-types";

class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: 'fishing'
        }
    }

    componentDidMount(){
        this.getSearchResult(this.state.search);

    }

    async getSearchResult(fails) {
        console.log('hello')
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${fails}&key=AIzaSyCfNLDfQx80kGti8l2Ggm04bKwc1fBIeoI&maxResults=2&video&part=snippet`);
        this.setState({
            search: response.data
        })
    }


    handleChange = (event) => {
        this.setState({search: event.target.value})
        console.log(this.handleChange)
    }


    // YoutubeEmbed = ({ embedId }) => (
    //     <div className="video-responsive">
    //       <iframe
    //         width="853"
    //         height="480"
    //         src={`https://www.youtube.com/embed/${embedId}`}
    //         frameBorder="0"
    //         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    //         allowFullScreen
    //         title="Embedded youtube"
    //       />
    //     </div>
    //   );

    render() {
        return (
            <div>
                <div className='searchbox'>
                    <input onChange={this.handleChange} type="text" placeholder='' className="search"/><br /><br />
                    <button onClick={ () => this.getSearchResult(this.state.search)}>Search</button>
                </div>
                <iframe id="ytplayer" type="text/html" width="640" height="360"
                    src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
                    frameBorder="0">
                </iframe>
            </div>
        );
    }
}

export default SearchBox;
