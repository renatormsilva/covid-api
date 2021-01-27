
import  React, { useState, useEffect } from 'react';
import api from '../services/api'

export default function Count(props) {
  const result = props.match.params.id

  const [count, setCount] = useState([]);


  

  useEffect(() => {

    api.get(`/count/`).then(response => {
      setCount(response.data)
    })
    console.log(count)
  }, [count])
  
  
    return (
        <React.Fragment>
        <div>
          <h1> {result} FAlA GALERA {result}  </h1>  
        </div>
        </React.Fragment>
        
                  
    )}
        
          