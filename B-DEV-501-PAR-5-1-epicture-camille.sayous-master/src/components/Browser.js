import React, {Component, View, Text, Image, StyleSheet} from 'react';
import '../styles/browser.css';
import Search from './Search';
import Header from '../components/Header';
import {NavLink} from 'react-router-dom';




class Browser extends Component {
 
    
        render() {
            return (
                <div className="browser">
                     <Header></Header>
                    <div className="container">
                    <NavLink exact to="/"><img
                        alt=""/></NavLink>
                        <Search />
                    </div>
                </div>
            );
        }
    }
    


export default Browser;