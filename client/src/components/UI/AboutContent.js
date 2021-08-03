import React from 'react'
import { Box } from '@material-ui/core'
import classes from '../UI/AboutContent.module.css'

export default function AboutContent() {
  return (
    <Box>
      <div className={classes['about-content']}>
        <strong className={classes['about-content_number']}>10</strong>
        <span className={classes['about-content_text']}>
          Years of Experienced
        </span>
      </div>
    </Box>
  )
}
