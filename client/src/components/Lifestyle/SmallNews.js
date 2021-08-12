import React from 'react'

import { Grid } from '@material-ui/core'

import AboutMe from '../UI/AboutMe'
import SmallArticle from './SmallArticle'
import PaginationLink from '../UI/PaginationLink'

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
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          padding: '2rem 1rem'
        }}
      >
        <PaginationLink></PaginationLink>
      </div>
    </section>
  )
}
