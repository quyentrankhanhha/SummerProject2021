import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import classes from '../UI/BlogEntry.module.css'
import ReadMore from './ReadMore'

export default function BlogEntry(props) {
  return (
    <Fragment>
      <div className={classes['blog-entry']}>
        <div className={classes.img} style={props.imgStyle}>
          <div className={classes.overlay}></div>
          <div className={classes.text}>
            <span className={classes.subheading}>Lifestyle</span>
            <h3>
              <Link>ham sandwich on white surface</Link>
            </h3>
            <ReadMore
              link='/article'
              styles={{
                background: '#fff',
                color: '#000',
                position: 'absolute',
                padding: '1em 2em'
              }}
            ></ReadMore>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
