import React, { useState} from 'react';
import './show.css'
import api from '../services/api'

export default function Show(props) {

    
    const result = props.match.params.id

    const [cases, setCases] = useState([]);

   
    api.get(`countries/${result}/confirmed`).then((response) => {
        setCases(response.data)
    })


    


    return (
        <React.Fragment>
            <table>
                <tr>
                    <th>Country</th>
                    <th>City</th>
                    <th>Confirmed cases</th>
                    <th>Active cases</th>
                    <th>Deaths</th>
                    <th>Recovered</th>
                    
                </tr>

                {cases.map((caso) => (
                <tr>
                    <td>{caso.countryRegion}</td>
                    <td>{caso.provinceState}</td>
                    <td>{caso.confirmed}</td>
                    <td>{caso.active}</td>
                    <td>{caso.deaths}</td>
                    <th> {caso.recovered} </th>
                        
                        
                </tr>
                ))}
                

            </table>
            
        </React.Fragment>

        
    )
}