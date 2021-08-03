import React from 'react'
import classes from '../UI/HeadingTitle.module.css'

export default function HeadingTitle(props) {
  return (
    <div>
      <span className={classes['heading-title']}>{props.title}</span>
    </div>
  )
}
