import React, {Component} from 'react';
import '../styles/header.css';
import {NavLink} from 'react-router-dom';
import Browser from './Browser';
import Profile from './Profile';

class Header extends Component {

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
             


            </div>
        )
    }
}

export default Header;