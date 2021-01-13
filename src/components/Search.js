
import React, {useState} from 'react';

export default function Search() {

    const [countries, setCountries] = useState('');

    return (
        <div className="search-box">
            <input
               onChange={(e) => setCountries(e.target.value)}
                className="search-txt" type="text" name="" placeholder="Enter a country name to get information about covid-19" />

            
                <a type="submit" className="search-btn" href={"show/"+countries}> 
                <i class="fas fa-search"></i>
            
            </a>
        </div>
                  
    )}