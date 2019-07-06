import React from 'react';
import Result from './Result';
import './ResultList.css';


const ResultList = ({result}) => {
  console.log("result in ResultList :", result)
  
  const resultComponent = result.map((item, i) => {
    console.log(item)
    return <Result
      key={i}
      id = {i + 1}
      name = {item.name}
      value={item.value}
    />
  })


  return (
    <div className="center pa4 br3 shadow-5">
    <table>
      <thead>
        <tr>
          <th>Result :</th>
          <th>Food</th> 
          <th>Accuracy</th>
        </tr>
      </thead>
      <tbody>
      {resultComponent}
      </tbody>
    </table>
    </div>
  )
}

export default ResultList;