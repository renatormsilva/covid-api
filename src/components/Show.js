import React, {  useEffect, useState } from 'react';
import './show.css'
import api from '../services/api'


export default function Show(props) {
  const [cases, setCases] = useState([]);
  const [location, setLocation] = useState([]);
  const [searchShow, setSearchShow] = useState([]);
  

  const result = props.match.params.id

  useEffect(() => {
    api.get(`/db/${result}`).then(response => {
      setCases(response.data)
      setLocation(response.data[0].countryRegion);
    })
  }, [result])

  return (
    <div className="table-container">
       <input id="show-input" onChange={(ev) => setSearchShow(ev.target.value)} className="search-show" type="text" placeholder='Type "br" to search for Brazil'></input>
      <a id="back-link" type="submit" href="/" ><i className="fas fa-backward"></i></a>

      <a id="show-link" type="submit" href={searchShow} ><i className="fas fa-search"></i></a>
      
      <h2 className="table-heading">Situation in {location}</h2>
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
          {console.log({cases})}
           {cases.map((caso) => (
            <tr key={caso.uid}>
                <td data-testid="Country">{caso.countryRegion}</td>
                <td data-testid="City">{caso.provinceState}</td>
                <td data-testid="Confirmed cases">{caso.confirmed}</td>
                <td data-testid="Active cases">{caso.active}</td>
                <td data-testid="Deaths">{caso.deaths}</td>
                <td data-testid="Recovered">{caso.recovered}</td>
          </tr>    
          ))}          
        </tbody>
      </table>
    </div>

        
    )
}