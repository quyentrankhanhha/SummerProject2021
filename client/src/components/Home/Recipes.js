import React from 'react'
import HeadingName from '../UI/HeadingTitle'
import { Container, Grid } from '@material-ui/core'
import classes from '../../styles/Recipes.module.css'
import BlogEntry from '../UI/BlogEntry'

export default function Recipes() {
  return (
    <section className={classes.recipes}>
      <Container>
        <Grid container>
          <Grid item xs={9}>
            <HeadingName title='Holiday Seasons Recipes' />
            <Grid item xs={6}>
              <BlogEntry></BlogEntry>
            </Grid>
            <Grid item xs={6}></Grid>
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
      </Container>
    </section>
  )
}
