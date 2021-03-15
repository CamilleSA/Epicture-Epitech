import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Router} from 'react-router-dom';
import ScrollTop from 'react-scrolltop-button';
import logo from './logo.svg';
import './App.css';
import Api from './pages/Api';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import NewPost from './pages/NewPost';
import View from './pages/View';
import Browser from './components/Browser';
import PostComment from './components/PostComment';
import ImageUser from './pages/ImageUser';
import Verif from './components/Verif';

class App extends Component {
    render() {
        return (

            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Api}/>
                    <Route path="/home" component={Home}/>
                    <Route path="/viewpicture/:id" component={View}/>
                    <Route path="/favorites" component={Favorites}/>
                    <Route path= "/browser" component={Browser}/>
                    <Route path="/newpost" component={NewPost}/>
                    <Route path="/images" component={ImageUser}/>
                    <Route path="/verif" component={Verif}/>
                    
                </Switch>
                <ScrollTop text="Move on the top" style={{
                    backgroundColor: "#53565f",
                    color: '#fff',
                    border: 'none',
                    fontSize: '13px',
                }}/>

                <div className="footer">
                    <p>© EPICTUREVC 2020</p>
                </div>

            </BrowserRouter>


        );
    };
}

export default App;
