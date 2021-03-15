import React, {Component} from 'react';
import axios from 'axios';
import Comments from '../components/Comments'
import Popular from '../components/Popular';
import '../styles/view.css';
import HeaderView from '../components/HeaderView';
import {Scrollbars} from 'react-custom-scrollbars';
import {Button} from 'react-bootstrap';
import Loader from 'react-loader';
import PostComment from '../components/PostComment';

class View extends Component {

    constructor(props) {
        super(props);
        this.state = {
            view: [],
            loaded: false
        }
    }

    componentDidMount() {
        let clientId = "1a6ecb5718c9147";
        axios({
            method: 'get',
            url: `https://api.imgur.com/3/album/${this.props.match.params.id}`,
            headers: {
                'authorization': 'Client-ID ' + clientId
            }
        }).then(response => {
            this.setState({
                view: response.data.data,
                loaded: true
            });
        }).catch(function (error) {
            console.log(error);
        });
    }


    render() {
        var arr = [];
        var res;
        if (this.state.view.images) {
            for (var i = 0; i < this.state.view.images.length; i++) {
                arr.push({"link": this.state.view.images[i].link, "de": this.state.view.images[i].description});
            }
        }

        res = arr.map((pic, id) => {
            return (
                <div key={id}>
                    <div className="post_image">
                        <img src={pic.link}
                             style={{objectPosition: '80% 20%', objectFit: 'cover'}} alt="" />
                    </div>
                    <div className="post_img_meta">
                        <p>{pic.de}</p>
                    </div>
                </div>
            )
        });
        return (


            <div className="main_view_body">
                <HeaderView/>
                <Loader loaded={this.state.loaded} color="blue">
                    <div className="wrapper">
                        <div className="post_container">
                            <div className="post_header">
                                <div className="post_title_container">
                                    <h1 className="post_title">{this.state.view.title}</h1>
                                    <div className="post_title_meta">
                                        <span>by</span><span className="pseudo">{this.state.view.account_url}</span>
                                    </div>
                                    <br/>
                                </div>
                                <div className="next_prev">
                                    <div className="prev">
                                        <span>&#60;</span>
                                    </div>
                                    <div className="btn_action">
                                        <div className="text">Next</div>
                                        <span className="right_arrow"/>
                                    </div>
                                </div>
                            </div>
                            <div className="post_images">
                                {res}
                            </div>
                            <div className="poster_action">
                                <div className="poster_inner">
                                    <div>
                                        <span><i className="fas fa-long-arrow-alt-up"/></span>
                                        <span><i className="fas fa-long-arrow-alt-down"/></span>
                                        <span><i className="fas fa-heart"/></span>
                                    </div>
                                    <div>
                                    </div>
                                </div>
                                <div className="allbum_views">{this.state.view.views} views</div>
                            </div>
                            <div className="popular_item_list">

                                <div className="header_side_list">
                                    <div>
                                        <p>MOST VIRAL IMAGES</p>
                                    </div>
                                    <div>
                                        <i className="fas fa-th-list list"></i>
                                        <i className="fas fa-th th"></i>
                                    </div>
                                </div>
                                <Scrollbars style={{width: 300, height: 350}}>
                                    <Popular/>

                                </Scrollbars>


                            </div>

                            <div id="new_comment">
                               <PostComment></PostComment>
                                <div className="summary">
                                    <div>
                                        <a href="">Read the community rules</a>
                                    </div>
                                    <div>
                                        <Button disabled>Post</Button>
                                    </div>
                                </div>
                            </div>
                            <div className="comment_header">
                                <div>
                                    {this.state.view.images_count} COMMENTS
                                </div>
                                <div>
                                    <span>Expand All</span>
                                    <span>Best</span>
                                </div>
                            </div>
                            <div className="comment_details_main">
                                <Comments id={this.props.match.params.id}/>
                            </div>
                        </div>2020
                    </div>
                </Loader>
            </div>

        )

    }
}

export default View;
