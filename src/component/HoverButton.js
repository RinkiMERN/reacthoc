import React, { useState } from 'react'
import hoc from './HOC'

const HoverButton = (props) => {
   
  return (
    <div>
      <h1 onMouseOver={props.increment}>clicked {props.count} times</h1>
    </div>
  )
}

export default hoc(HoverButton)
