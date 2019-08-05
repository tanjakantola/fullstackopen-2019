import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const countGood = () => setGood(good+1);

  const countNeutral = () => setNeutral(neutral+1);
  
  const countBad = () => setBad(bad+1);

  return (
      <div>
      <h1>Give feedback</h1>
      <Button
        handleClick={countGood}
        text='Good'
      />
      <Button
        handleClick={countNeutral}
        text='Neutral'
      />
      <Button
        handleClick={countBad}
        text='Bad'
      />
      <h2>Statistics</h2>
        <Statistics good={good} neutral={neutral} bad={bad} /> 
      </div>
  )
}

const Statistics = ({good, neutral, bad}) => {
    let total = good + neutral + bad;
    let average = (good + bad * (-1)) / total;
    let positive = (good / total) * 100;
   
    if(total!==0)
    return(
      <div>
      <div>Good: {good}</div>
      <div>Neutral: {neutral}</div>
      <div>Bad: {bad}</div>
      <div>Total number of feedbacks: {total}</div>
      <div>Average evaluation: {average}</div>
      <div>Percentage of positive feedback: {positive}</div>
      </div>
    )
    return(
        <div>
          No feedback given.
        </div>
      )
  }

  const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
      {text}
    </button>
  )
  
ReactDOM.render(<App />, 
  document.getElementById('root')
)