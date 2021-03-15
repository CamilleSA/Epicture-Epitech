import React, { Component } from 'react';
import DisplayFavorites from '../components/DisplayFavorites';
import Header from '../components/Header';
import '../styles/imageuser.css'
import axios from 'axios';


class Verif extends Component {
    constructor() {
        super();
        this.state = {
            persons: []
        };
    }

    componentDidMount() {
        const config = {
            headers: {
                // 'Content-Type': 'application/json',
                Authorization: 'Bearer d0759f969364482f33a18fd07dec636a95e04045'
            }
        }

        axios.post('https://api.imgur.com/3/account/EpictureVC/verifyemail', config)
        .then(res => {
            const persons = res.data["data"];
            const status = res.data["error"];
            alert(status);
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
          }).catch(
            function (error) {
            //   console.log('Show error notification!')
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
            })
    }

    render() {
        return (
            <button onClick={this.componentDidMount}>Verif</button>

         
        )

    }
}

export default Verif;
