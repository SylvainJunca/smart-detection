import React from 'react'; 

// import './Result.css';


const Result = ( {i, id, name, value}) => {
  


  
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td> 
      <td>{(value * 100).toFixed(2)} %</td>
    </tr>
  )
}

export default Result;