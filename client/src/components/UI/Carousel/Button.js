import React from 'react'
import classes from './Button.module.css'

export default function Button(props) {
  return (
    <button className={classes['carousel__btn']} onClick={props.onClick}>
      {props.title}
    </button>
  )
}
