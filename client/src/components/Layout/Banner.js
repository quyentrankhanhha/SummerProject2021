import React from 'react'
import classes from './Banner.module.css'
import { Breadcrumbs, Typography } from '@material-ui/core'

import { Link } from 'react-router-dom'

export default function Banner(props) {
  return (
    <section
      className={classes.banner}
      style={{ backgroundImage: `url(${props.source})` }}
    >
      <div className={classes.overlay}>
        <div className={classes.container}>
          <div className={classes['container__inner']}>
            <div className={classes.text}>
              <h1>{props.title}</h1>
              <Breadcrumbs
                separator={<span class='fas fa-chevron-right'></span>}
              >
                <Link>Home</Link>
                <Typography>{props.page}</Typography>
              </Breadcrumbs>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
