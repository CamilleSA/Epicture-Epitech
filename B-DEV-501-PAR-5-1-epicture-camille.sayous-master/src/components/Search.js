import React, {Component, useState} from "react";
import Unsplash, { toJson } from "unsplash-js";
import '../styles/search.css';

const unsplash = new Unsplash({
    accessKey: "1UztB7I03nWCD6gKbD52wwdrqyQC9yKiUEAIy9xZPP0",
});

export default function Search() {


        const [query, setQuery] = useState("");
        const [pics, setPics] = useState([]);

        const search = async (e) => {
            e.preventDefault();
            //search.photos(keyword, page, per_page, filters)
            unsplash.search
                .photos(query)
                .then(toJson)
                .then((json) => {
                    setPics(json.results);
                });

        };
        return (
        <>
            <form className="form" onSubmit={search}>
                <input
                    type="text"
                    name="query"
                    className="input"
                    placeholder="Images, #tags, @users oh my !"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}></input>
                    <button type="submit" className="button">
                    <img
                       href="/" src="https://s.imgur.com/desktop-assets/desktop-assets/icon-search.94d41ef40ad4e47162607d90122c892f.svg"
                        alt=""/>
                    </button>
            </form>
            <div className="card-list">
            {
          pics.map((pic) =>
            <div className="card" key={pic.id}>
              <img
                className="card--image"
                alt={pic.alt_description}
                src={pic.urls.full}
                width="50%"
                height="50%"
              ></img>
            </div>)
        }
            </div>

        </>
        );
    }