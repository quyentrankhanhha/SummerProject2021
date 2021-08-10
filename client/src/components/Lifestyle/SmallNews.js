import React from 'react'

import { Grid } from '@material-ui/core'

import AboutMe from '../UI/AboutMe'
import SmallArticle from '../UI/SmallArticle'

export default function SmallNews() {
  return (
    <section className='section-spacing'>
      <Grid container spacing={6} direction='row'>
        <Grid item xs={9}>
          <SmallArticle></SmallArticle>
          <SmallArticle></SmallArticle>
        </Grid>
        <Grid item xs={3}>
          <AboutMe />
        </Grid>
      </Grid>
    </section>
  )
}
