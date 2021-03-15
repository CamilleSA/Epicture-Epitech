import React, {Component} from 'react';
import axios from 'axios';
import '../styles/comments.css';

class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: [],
            load: false
        }
    }

    componentDidMount() {
        let clientId = "1a6ecb5718c9147";
        axios({
            method: 'get',
            url: `https://api.imgur.com/3/gallery/${this.props.id}/comments`,
            headers: {'authorization': 'Client-ID ' + clientId}
        }).then(response => {
            this.setState({
                comment: response.data.data
            });
        }).catch(function (error) {
            console.log(error);
        });
    }

    handleclick = (e) => {
        e.preventDefault();
        this.setState({
            load: !this.state.load
        })
    }

    render() {
        var arr = [];

        for (var j = 0; j < this.state.comment.length; j++) {
            if (this.state.comment[j].children.length) {
                for (var i = 0; i < this.state.comment[j].children.length; i++) {
                    arr.push({
                        "author": this.state.comment[j].children[i].author,
                        "platform": this.state.comment[j].children[i].platform,
                        "points": this.state.comment[j].children[i].points,
                        "comment": this.state.comment[j].children[i].comment
                    });
                }
            }
        }
        var res = this.state.comment.map(a => {
            return (
                <div>
                    <li className="comment_list">
                        <div className="author">
                            <span style={{fontWeight: '700', marginRight: '4px'}}>{a.author}</span><span>via <a
                            href="">{a.platform}</a></span><span style={{marginLeft: '18px'}}>{a.points}pts</span>
                        </div>
                        <div>
                            {a.comment}
                        </div>
                    </li>
                </div>
            )
        });

        return (
            <div className="main_comments_body">
                <ul>{res}</ul>
            </div>
        );
    }
}

export default Comments;