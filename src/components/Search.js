
import React from 'react';

export default function Search() {
    return (
        <React.Fragment>
            <input type="search" placeholder="Enter a country name to get information about covid-19" />
            <button type="submit">Search</button>
            <div className="content"></div>
        </React.Fragment>
    )
}