import React from 'react';
import Result from './Result';
import './ResultList.css';


const ResultList = ({result}) => {
  
  const resultComponent = result.map((item, i) => {
    
    return <Result
      key={i}
      id = {i + 1}
      name = {item.name}
      value={item.value}
    />
  })
 
  //If the highest item on the list is not above 90% confidence, we doubt it is food
  const isItFood = result[0].value >= 0.90 && <table>
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
     ||<p className="result">This is probably not food and if it is, who cooked that?</p>;

  return (
    <div className="center pa4 br3 shadow-5">
     {isItFood}
    </div>
  )
}

export default ResultList;