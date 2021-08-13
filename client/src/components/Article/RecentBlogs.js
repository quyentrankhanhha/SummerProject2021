import React from 'react'
import { Grid, Box } from '@material-ui/core'

import classes from './RecentBlogs.module.css'

export default function RecentBlogs(props) {
  return (
    <Grid container spacing={3} className={classes['recent-blogs']}>
      <Grid item xs={4}>
        <img
          className={classes.imagine}
          src={props.source}
          alt='recent blog img'
        />
      </Grid>
      <Grid item xs={8}>
        <div className={classes.text}>
          <h3>{props.text}</h3>
          <div className={classes.meta}>
            <Box display='flex' justifyContent='space-between'>
              <Box>
                <span>
                  <span class='far fa-calendar-alt'></span>
                  {props.date}
                </span>
              </Box>
              <Box>
                <span>
                  <span class='far fa-comments'></span>
                  {props.comments}
                </span>
              </Box>
            </Box>
          </div>
        </div>
      </Grid>
    </Grid>
  )
}
