import React, { Component } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import '../styles/imageuser.css'




class Favorites extends Component {
    constructor() {
        super();
        this.state = {
            persons: []
        };
    }

    componentDidMount() {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer 91ce943a126245017ab9a4cc5db7041f5d664d3d'
            }
        }

        axios.get('https://api.imgur.com/3/account/EpictureVC/images/', config)
        .then(res => {
            const persons = res.data["data"];
           /* let final= [];
            
            for(let i = 0; i <= persons.length; i++) {
                try {
                if (parseInt(persons[i].privacy) === 2) {
                    final.push(persons[i]);
                } else {
                    persons[i].link = "https://imgur.com/account/favorites/" + persons[i].id
                }
            }
            catch {
                

            }
            }*/
            
            this.setState({ persons });
          })
    }

    render() {
        return (
            <div className="header">
            <Header></Header>

            <div className="titlee">

            <h1>Your Images</h1>

            </div>


            <div className="imageuser">
                
                <div className="">  { 

                <div className="" >{
                this.state.persons.map(person => <img className="card--image" src={person.link} key={person.id}/>)}
                </div>

                }
                

            </div>
            </div>
            </div>

        );

    }
}

export default Favorites;

