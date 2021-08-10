import React from 'react'
import { Grid } from '@material-ui/core'

import ReadMore from './ReadMore'

import classes from './SmallArticle.module.css'

export default function SmallArticle() {
  return (
    <Grid container spacing={5} className={classes['small-article']}>
      <Grid item xs>
        <img
          src={'/assets/featurepost1.jpeg'}
          className={classes.img}
          alt='small news'
        />
      </Grid>
      <Grid item xs>
        <div className={classes.text}>
          <p className={classes.subtitle}>
            <span>Dessert</span>
            <span></span>
            <span>March 01, 2018</span>
          </p>
          <h3>
            <a>Tasty and Delicious Foods</a>
          </h3>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth.
          </p>

          <ReadMore
            styles={{
              background: '#fd5f00',
              color: '#fff',
              padding: '0.5rem 1rem',
              border: '#fd5f00 1px solid',
              borderRadius: '3px',
              fontWeight: 'bold'
            }}
          ></ReadMore>
        </div>
      </Grid>
    </Grid>
  )
}
