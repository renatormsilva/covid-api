import React, {useState} from 'react';
import './show.css'

export default function Show() {

    const [cases, setCases] = useState([]);
    const [countries, setCountries] = useState("BR");


    return (
        <React.Fragment>
            <h1>Brasil</h1>
            <hr/>
            <table>
                <tr id="header">
                    <th>Country</th>
                    <th>City</th>
                    <th>Confirmed cases</th>
                    <th>Active cases</th>
                    <th>Deaths</th>
                    <th>Recovered</th>
                </tr>
                
                <tr>
                    <td>Brasil</td>
                    <td>Manaus</td>
                    <td>24</td>
                    <td>12</td>
                    <td>2</td>
                    <td>2</td>
                        
                </tr>

                <tr>
                    <td>John</td>
                    <td>Doe</td>
                    <td>24</td>
                    <td>USA</td>
                    <td>Male</td>
                        
                </tr>

                <tr>
                    <td>John</td>
                    <td>Doe</td>
                    <td>24</td>
                    <td>USA</td>
                    <td>Male</td>
                        
                </tr>

                <tr>
                    <td>John</td>
                    <td>Doe</td>
                    <td>24</td>
                    <td>USA</td>
                    <td>Male</td>
                        
                </tr>

                <tr>
                    <td>John</td>
                    <td>Doe</td>
                    <td>24</td>
                    <td>USA</td>
                    <td>Male</td>
                        
                </tr>

            </table>
            
        </React.Fragment>

        
    )
}