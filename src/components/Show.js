import React, {  useEffect, useState} from 'react';
import './show.css'
import api from '../services/api'

export default function Show(props) {

    
  const result = props.match.params.id

  const [cases, setCases] = useState([]);
  const [location, setLocation] = useState('');
  const [searchShow, setSearchShow] = useState('');
  


  
  useEffect(() => {
        api.get(`countries/${result}/confirmed`).then((response) => {
        setLocation(response.data[2].countryRegion)
    })
  
  api.get(`countries/${result}/confirmed`).then((response) => {
        setCases(response.data)
  })
    
    
    
  })
  

  
    



  return (
        
    <div className="table-container">
      <input id="show-input" onChange={(ev) => setSearchShow(ev.target.value)} className="search-show" type="text" placeholder='Type "br" to search for Brazil'></input>
      <a id="back-link" type="submit" href="/" ><i class="fas fa-backward"></i></a>

      <a id="show-link" type="submit" href={searchShow} ><i class="fas fa-search"></i></a>
      
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
          {cases.map((caso) => (
            <tr key={caso.uid}>
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