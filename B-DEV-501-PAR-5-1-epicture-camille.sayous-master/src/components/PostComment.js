import React, {Component} from 'react';
import axios from 'axios';
import '../styles/comments.css';

class PostComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            load: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer 1c32d824dab64e1848477807f95a814fa7237d3d'
            },
            data: {
                'image_id': this.props.match.params.id,
                'comment': this.state.value


            }
        }

        axios.post('https://api.imgur.com/3/comment', config)
        .then(res => {
            const persons = res.data["data"];
        
          }).catch(function (error) {
            console.log(error);
            console.log(error.data);

        });
        alert('Com' + this.state.value);
        event.preventDefault();
      }
    

  
    componentDidMount() {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer 91ce943a126245017ab9a4cc5db7041f5d664d3d'
            },
            data: {
                'image_id': '${this.props.match.params.id}',
                'comment': '${this.state.value}'


            }
        }

        axios.post('https://api.imgur.com/3/comment', config)
        .then(res => {
            const persons = res.data["data"];
        
          }).catch(function (error) {
            console.log(error);
            console.log(error.data);

        });
    }

    render() {
        

        return (
            <form onSubmit={this.handleSubmit}>
            <label>
              Com:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Envoyer" />
          </form>
        );
    }
}

export default PostComment;