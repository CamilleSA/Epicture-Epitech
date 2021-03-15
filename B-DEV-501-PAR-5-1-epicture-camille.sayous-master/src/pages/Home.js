import React, {Component} from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Header from '../components/Header';

import Background from '../media/Background.png';
import Halloween from '../media/Halloween.png';
import '../styles/home.css';
import '../index.css';
import News from '../components/News';


const img = Background;
const options = ['POPULAR', 'RISING', 'NEWEST']
const option = ['MOST VIRAL', 'USER SUBMITTED', 'HIGHEST SCORING']


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedOption: ''
        }
    }

    componentDidMount() {
        this.setState({
            val: 'https://api.imgur.com/3/gallery/hot/viral/0?showViral=true&client_id=1a6ecb5718c9147'
        });
    }

    _onSelect = () => {
        if (options[1] === 'RISING') {
            this.setState({
                val: 'https://api.imgur.com/3/gallery/hot/rising/0?showViral=true&client_id=1a6ecb5718c9147'
            });
        } else {
            return null;
        }
        if (options[2] === 'NEWEST') {
            this.setState({
                val: 'https://api.imgur.com/3/gallery/hot/time/0?showViral=true&client_id=1a6ecb5718c9147'
            });
        } else {
            return null;
        }
    }

    render() {

        const defaultOption = option[0];
        const defaultOptions = options[0];

        var list_quote = ['Laugh, cry, learn. There’s never a dull moment.', 'Is it GIF or GIF? Either way, we’ve got the best of them.', 'On the internet, nobody knows you"re a dog"', "You're already awesome."];
        var res = list_quote[Math.floor(list_quote.length * Math.random())];
        return (
            <div style={{backgroundImage: `url(${img})`, height: '450px', backgroundSize: 'cover'}}>
                <Header/>
                <br></br>
                <div className="random-title">
                    <span1>{res}</span1>
                </div>
                <div className="container">
                    <a href="https://epicture-upload.netlify.app/" className="ButtonLink" title="New post">
                    <img
                            src="https://s.imgur.com/desktop-assets/desktop-assets/icon-new-post.e31d38c8dcf98b5c9ce5483756923188.svg"
                            alt=""/>
                        <span>Upload Image</span>
                    </a>
                  
                </div>

                
                <div className="browsing">
                <a href="https://epicture-browser.netlify.app/" className="button_search" title="Browser">
                        <span>Browser</span>
                        </a>
              
                        </div>
                      
                <div className="content-wrapper">
                    <div className="content-inner">
                        <div>
                            <Dropdown options={option} onChange={this._onSelect} value={defaultOption}/>
                        </div>

                        <div>
                            <Dropdown options={options} onChange={this._onSelect} value={defaultOptions}/>
                        </div>
                    </div>
                    <div>
                        {<News url={this.state.val}/>}

                    </div>

                </div>
            </div>
        )
    }
}

export default Home;