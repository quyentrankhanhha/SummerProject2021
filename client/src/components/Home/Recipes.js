import React from 'react'
import HeadingName from '../UI/HeadingTitle'
import { Container, Grid } from '@material-ui/core'
import BlogEntry from '../UI/BlogEntry'
import Categories from '../UI/Categories'

export default function Recipes() {
  return (
    <section className='section-spacing'>
      <Container>
        <Grid container spacing={4} direction='row'>
          <Grid item xs={9}>
            <HeadingName title='Holiday Seasons Recipes' />
            <Grid container spacing={4}>
              <Grid item xs={6}>
                <BlogEntry
                  imgStyle={{
                    background: `url(/assets/recipes1.webp)`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center',
                    backgroundSize: 'cover',
                    height: '500px'
                  }}
                ></BlogEntry>
              </Grid>
              <Grid item xs={6}>
                <BlogEntry
                  imgStyle={{
                    background: `url(/assets/recipes1.webp)`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center',
                    backgroundSize: 'cover',
                    height: '500px'
                  }}
                ></BlogEntry>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <Categories></Categories>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}
