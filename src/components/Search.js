
import React, {useState} from 'react';

export default function Search() {

    const [countries, setCountries] = useState('');

    return (
        <React.Fragment>
            <div className="header">
                <p>Enter a country abbreviation to get information about covid-19</p>
            </div>
            <div className="search-box">
            <input
               onChange={(e) => setCountries(e.target.value)}
                className="search-txt" type="text" name="" placeholder="Type br to search for Brazil" />

            
                <a type="submit" className="search-btn" href={"show/"+countries}> 
                <i class="fas fa-search"></i>
            
            </a>
        </div>
        </React.Fragment>
        
                  
    )}