import React from 'react'
import classes from './Input.module.css'
function Input() {
  return (
    <div className={classes.input}>
      <label htmlFor='text' className={classes.label}></label>
      <input className={classes.input} />
    </div>
  )
}

export default Input
