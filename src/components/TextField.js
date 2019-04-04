import React from 'react'

const TextField = (props) => {
  // debugger;
  return(
    <div>
      <label> {props.displayName} </label>
      <input
        type="text"
        value={props.inputValue}
        onChange={props.handleChange}
      />
    </div>
  )
}

export default TextField
