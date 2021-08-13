import React from 'react'
import classes from './Category.module.css'

export default function Category(props) {
  return (
    <li className={classes.li}>
      <a href='/'>
        {props.title}
        <span>({props.number})</span>
      </a>
    </li>
  )
}
