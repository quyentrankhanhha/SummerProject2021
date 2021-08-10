import React from 'react'
import { Link } from 'react-router-dom'

import classes from '../UI/ReadMore.module.css'

export default function ReadMore({ styles }) {
  return (
    <p>
      <Link className={classes['btn-readmore']} style={styles}>
        Read more
        <span className='fas fa-long-arrow-alt-right'></span>
      </Link>
    </p>
  )
}
