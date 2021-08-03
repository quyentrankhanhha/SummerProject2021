import React, { Fragment } from 'react'
import classes from '../UI/BlogEntry.module.css'
export default function BlogEntry() {
  return (
    <Fragment>
      <div
        className={classes.img}
        style={{ backgroundImage: `url('../assets/recipes1.webp')` }}
      >
        <div className={classes.overlay}></div>
        <div className={classes.text}>
          <span className={classes.subheading}>Lifestyle</span>
          <h3>ham sandwich on white surface</h3>
          <p>
            <a href='#'>
              Read more
              <span className='fas fa-long-arrow-alt-right'></span>
            </a>
          </p>
        </div>
      </div>
    </Fragment>
  )
}
