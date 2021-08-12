import React from 'react'

import classes from './Form.module.css'
import { TextField } from '@material-ui/core'

export default function Form() {
  return (
    <div className={classes.form}>
      <form>
        <TextField
          label='Your Name'
          style={{ margin: 8 }}
          fullWidth
          margin='normal'
          variant='outlined'
        />
        <TextField
          label='Your Email'
          style={{ margin: 8 }}
          fullWidth
          margin='normal'
          variant='outlined'
        />
        <TextField
          label='Subject'
          style={{ margin: 8 }}
          fullWidth
          margin='normal'
          variant='outlined'
        />
        <TextField
          label='Message'
          style={{ margin: 8 }}
          fullWidth
          margin='normal'
          variant='outlined'
          multiline
          rows={6}
        />
        <button>Send Message</button>
      </form>
    </div>
  )
}
