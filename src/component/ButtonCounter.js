import React, {useState} from 'react'
import HOC from './HOC'

const ButtonCounter = (props) => {
    console.log(props);
  return (
    <div>
      <p>{props.count}</p>
      <button onClick={props.increment} >increment</button>
    </div>
  )
}

export default HOC(ButtonCounter)
