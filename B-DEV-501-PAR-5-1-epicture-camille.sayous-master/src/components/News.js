import React, {Component} from 'react';
import axios from 'axios';
import '../styles/new.css';
import Loader from 'react-loader';
import {Link} from 'react-router-dom';

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            popular: [],
            loaded: false
        }
    }

    componentWillReceiveProps(nextProps) {
        axios.get(nextProps.url).then(response => {
            this.setState({
                popular: response.data.data,
                loaded: true
            });
        })
    }

    render() {
        if (!this.state.popular) {
            return null;
        }

        const filte = this.state.popular.filter(a => {
            return a.images && a.images[0].link.length > 1 ? a.images[0].link : null;
        });

        var result = filte.map((a, id) => {
            return (
                <div id="grid_column" key={id}>
                    <Link to={`/viewpicture/${a.id}`}>
                        <div className="post_item_media">
                            {a.images && a.images[0].link.substr(a.images[0].link.length - 1) === '4' ?
                                <Vid sr={a.images ? a.images[0].link : null}/> :
                                <Img sr={a.images ? a.images[0].link : null}/>}
                        </div>


                        <div id="post-item-title_wrap">
                            <div className="post_title">
                                <p>{a.title}</p>
                            </div>
                            <div className="post_ups_dws">
                                <div>
                                    <p className="inner_icons"><i class="fas fa-arrow-up"/>{a.ups}</p>
                                </div>
                                <div>
                                    <p className="inner_icons"><i class="fas fa-arrow-down"/>{a.downs}</p>
                                </div>
                                <div>
                                    <p className="inner_icons"><i className="fas fa-comment-dots"/>{a.comment_count}</p>
                                </div>
                                <div>
                                    <p className="inner_icons"><i className="fas fa-eye"/>{a.views}</p>
                                </div>
                            </div>
                        </div>

                    </Link>
                </div>
            )
        });

        return (
            <div className="home_grid container">
                {this.state.loaded ? result : <Loader loaded={this.state.loaded} color="blue"/>}
            </div>
        )
    }

}

const Img = (props) => {
    return (
        <img src={props.sr} alt=""/>
    )
}

const Vid = (props) => {
    return (
        <div>
            <video controls autoPlay muted>
                <source src={props.sr} type="video/mp4"/>
            </video>
        </div>
    )
}

export default News;
