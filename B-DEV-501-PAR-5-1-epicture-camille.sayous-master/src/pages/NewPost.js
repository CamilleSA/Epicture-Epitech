import React, { Component } from 'react';
import '../styles/newpost.css';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';
import imge from '../media/unnamed.png';





class NewPost extends Component {
  
 
  uploadImage() {
    const r = new XMLHttpRequest()
    const d = new FormData()
    const e = document.getElementsByClassName('input-image')[0].files[0]
    var u


    d.append('image', e)

    r.open('POST', 'https://api.imgur.com/3/image/')
    r.setRequestHeader('Authorization', `Client-ID 1a6ecb5718c9147`)
    r.onreadystatechange = function () {
      if(r.status === 200 && r.readyState === 4) {
        let res = JSON.parse(r.responseText)
        u = `https://i.imgur.com/${res.data.id}.png`
        fetch(u)
        .then(response => response.json())
        .then(data => this.setState({ totalReactPackages: data.total }));

        const d = document.createElement('div')
        d.className = 'image'
        document.getElementsByTagName('body')[0].appendChild(d)

        const a = document.createElement('a')
        a.className= 'image-link'
        a.href = u
        document.getElementsByClassName('image')[0].appendChild(a)


        const p = document.createElement('p')
        p.className = 'image-url'
        p.innerHTML = u
        document.getElementsByClassName('image-link')[0].appendChild(p)

        const i = document.createElement('img')
        i.className = 'image-src'
        i.src = u
        document.getElementsByClassName('image')[0].appendChild(i)


      }
    }
    r.send(d)
  }
  

  render() {
    return (
 <div className="App">
      <Header></Header>
      <h1>Upload Image</h1>



 <div className="App-header">
 <img className="imgupload" src={imge}></img>




   <form>
   <input type="file" className="input-image" onChange={this.uploadImage.bind(this)}/>
 </form>
 </div>
 
</div>
  
    );
  }
}

export default NewPost;