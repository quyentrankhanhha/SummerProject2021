import React from 'react'
import { Container, Grid } from '@material-ui/core'

import HeadingTitle from '../UI/HeadingTitle'
import FeaturePost from './FeaturePost'
import BlogEntry from '../UI/BlogEntry'

export default function RecentStories() {
  return (
    <section className='section-spacing'>
      <Container>
        <HeadingTitle title='Recent Stories' />
        <Grid container spacing={4}>
          <Grid item container xs={6} spacing={4} direction='row'>
            <Grid item container spacing={4}>
              <Grid item xs>
                <FeaturePost
                  link='/article'
                  source={`/assets/recipes1.webp`}
                  imgStyle={{ height: '220px' }}
                  readMoreStyle={{
                    color: '#fd5f00',
                    borderRadius: '3px',
                    fontWeight: 'bold'
                  }}
                />
              </Grid>
              <Grid item xs>
                <FeaturePost
                  link='/article'
                  source={`/assets/recipes1.webp`}
                  imgStyle={{ height: '220px' }}
                  readMoreStyle={{
                    color: '#fd5f00',
                    borderRadius: '3px',
                    fontWeight: 'bold'
                  }}
                />
              </Grid>
            </Grid>
            <Grid container spacing={4}>
              <Grid item xs>
                <FeaturePost
                  link='/article'
                  source={`/assets/recipes1.webp`}
                  imgStyle={{ height: '220px' }}
                  readMoreStyle={{
                    color: '#fd5f00',
                    borderRadius: '3px',
                    fontWeight: 'bold'
                  }}
                />
              </Grid>
              <Grid item xs>
                <FeaturePost
                  link='/article'
                  source={`/assets/recipes1.webp`}
                  imgStyle={{ height: '220px' }}
                  readMoreStyle={{
                    color: '#fd5f00',
                    borderRadius: '3px',
                    fontWeight: 'bold'
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <BlogEntry
              imgStyle={{
                background: `url(/assets/recipes1.webp)`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                backgroundSize: 'cover',
                height: '800px'
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}
