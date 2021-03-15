import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Router} from 'react-dom';


export default class Api extends React.Component {
    componentDidMount() {

        let _token = {};
        let client_id = "1a6ecb5718c9147";
        let url = "https://api.imgur.com/oauth2/authorize?client_id=" + client_id + "&response_type=token";

        if (!_token) {
            return null;
        }

        if (!_token.access_token) {
            window.location.href = url;
        } else {
            this.props.setToken(_token.access_token);
        }
    }

    render() {
        return (
            <div className="Authenti"/>


        );
    };
}
