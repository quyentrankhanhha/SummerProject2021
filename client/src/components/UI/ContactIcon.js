import React from 'react'
import classes from './ContactIcon.module.css'
import { Grid } from '@material-ui/core'

export default function ContactIcon(props) {
  return (
    <Grid item xs>
      <div className={classes['contact-icon']}>
        <div className={classes.box}>{props.icon}</div>
        <h3>{props.title}</h3>
        <p>{props.subtitle}</p>
      </div>
    </Grid>
  )
}
