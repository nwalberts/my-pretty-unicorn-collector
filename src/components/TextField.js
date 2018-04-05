import React from 'react'

const TextField = (props) => {

  return(
    <input
      type="text"
      name={props.fieldName}
      value={props.fieldValue}
      onChange={props.fieldChangeHandler}
    />
  )
}

export default TextField
