import React, {Component} from 'react';
import axios from 'axios';
import '../styles/popular.css';

const url = 'https://api.imgur.com/3/gallery/hot/viral/0?client_id=1a6ecb5718c9147';


class Popular extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pop: []
        }
    }

    componentDidMount() {
        axios.get(url).then(response => {
            this.setState({
                pop: response.data.data
            });
        })
    }

    render() {
        const filtr = this.state.pop.filter(el => {
            return el.images && el.images[0].link.length > 1 ? el.images[0].link : null;
        });
        var result = filtr.map((el, id) => {

            return (
                <div className="gridsub_column">
                    <li key={id}>
                        <div className="post">
                            <img src={el.images ? el.images[0].link : null} alt=" " width="100px" height="100px"/>
                        </div>

                        <div className="title">
                            <div className="list-title">{el.title}</div>
                        </div>
                    </li>
                </div>
            )

        });
        return (
            <div className="popular_wrapper">
                <ul>{result}</ul>
            </div>
        );
    }

}

export default Popular;