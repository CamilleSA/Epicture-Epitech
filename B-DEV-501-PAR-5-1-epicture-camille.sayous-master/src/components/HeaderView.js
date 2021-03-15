import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'
import '../styles/headerview.css';
import '../styles/header.css';
import Profile from './Profile';

import Browser from './Browser';
import axios from 'axios';

class HeaderView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            click: false,
            account: []
        }
    }

    click = (e) => {
        e.preventDefault();
        this.setState({
            click: !this.state.click
        });
    }

    componentDidMount() {
        let clientId = "1a6ecb5718c9147";
        axios({
            method: 'get',
            url: 'https://api.imgur.com/3/account/EpictureVC/favorites/',
            headers: {'authorization': 'Client-ID ' + clientId}
        }).then(response => {
            this.setState({
                account: response.data.data
            });
        }).catch(function (error) {
            console.log(error);
        });
    }

    render() {

        return (
            <div>
                <div className="header_main">
                    <div>
                        <NavLink exact to="https://epicture-vc.netlify.app/"><img
                            src="https://s.imgur.com/desktop-assets/desktop-assets/Navbar-logo.bcf646386406b43008da913e901b916d.svg"
                            alt=""/></NavLink>
                    </div>

                    <div className="header_icon">
                        <span>EpictureVC </span>
                    </div>
                    <div className="avatar_header">
                        <Profile/>
                    </div>
                </div>
                <div className="container">
                    <a href="" className="ButtonLink" title="New post">
                        <img
                            src="https://s.imgur.com/desktop-assets/desktop-assets/icon-new-post.e31d38c8dcf98b5c9ce5483756923188.svg"
                            alt=""/>
                        <span>New post</span>
                    </a>
                    <a href="" className="button_search" title="Browser">
                        <span>Browser</span>
                    </a>
                </div>
            </div>
        );
    }
}


export default HeaderView;