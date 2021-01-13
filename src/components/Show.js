import React, { useState} from 'react';
import './show.css'
import api from '../services/api'

export default function Show(props) {

    
    const result = props.match.params.id

    const [cases, setCases] = useState([]);

    const [location, setLocation] = useState('');


    api.get(`countries/${result}/confirmed`).then((response) => {
        setLocation(response.data[2].countryRegion)
    })

   
    
        api.get(`countries/${result}/confirmed`).then((response) => {
        setCases(response.data)
    })
    



    return (
        <div class="table-container">
            <h2 class="table-heading">Situation in {location}</h2>

      <table>
        <thead>
                <tr>
                    <th>Country</th>
                    <th>City</th>
                    <th>Confirmed cases</th>
                    <th>Active cases</th>
                    <th>Deaths</th>
                    <th>Recovered</th>
                    
                </tr>
        </thead>

        <tbody>
          {cases.map((caso) => (
            <tr>
                <td data-heading="Country">{caso.countryRegion}</td>
                <td data-heading="City">{caso.provinceState}</td>
                <td data-heading="Confirmed cases">{caso.confirmed}</td>
                <td data-heading="Active cases">{caso.active}</td>
                <td data-heading="Deaths">{caso.deaths}</td>
                <td data-heading="Recovered">{caso.recovered}</td>
          </tr>    
          ))}
          

          
        </tbody>
      </table>
    </div>

        
    )
}