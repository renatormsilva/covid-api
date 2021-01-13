
import React from 'react';

export default function Search() {

    const [cases, setCases] = useState([]);
    const [countries, setCountries] = useState("BR");
    
    return (
        <div className="search-box">
            <input
                onChange={(e) => }
                className="search-txt" type="text" name="" placeholder="Enter a country name to get information about covid-19" />
            <a type="submit" className="search-btn" href="/#">
                <i class="fas fa-search"></i>
            </a>
        </div>
                  
    )}