import React from 'react'
import { Container, Grid } from '@material-ui/core'

import HeadingTitle from '../UI/HeadingTitle'
import AboutMe from '../UI/AboutMe'
import FeaturePost from './FeaturePost'

export default function FeaturePosts() {
  return (
    <section className='section-spacing'>
      <Container>
        <Grid container spacing={4} direction='row'>
          <Grid item xs={9}>
            <HeadingTitle title='Feature Posts' />
            <Grid container spacing={4}>
              <Grid item xs={4}>
                <FeaturePost
                  source={`/assets/featurepost1.jpeg`}
                  imgStyle={{ height: 'auto' }}
                  readMoreStyle={{
                    background: '#000',
                    color: '#fff',
                    padding: '0.5rem 1rem',
                    border: '1px solid',
                    borderRadius: '3px',
                    fontWeight: 'bold'
                  }}
                ></FeaturePost>
              </Grid>
              <Grid item xs={4}>
                <FeaturePost
                  source={`/assets/featurepost1.jpeg`}
                  imgStyle={{ height: 'auto' }}
                  readMoreStyle={{
                    background: '#000',
                    color: '#fff',
                    padding: '0.5rem 1rem',
                    border: '1px solid',
                    borderRadius: '3px',
                    fontWeight: 'bold'
                  }}
                ></FeaturePost>
              </Grid>
              <Grid item xs={4}>
                <FeaturePost
                  source={`/assets/featurepost1.jpeg`}
                  imgStyle={{ height: 'auto' }}
                  readMoreStyle={{
                    background: '#000',
                    color: '#fff',
                    padding: '0.5rem 1rem',
                    border: '1px solid',
                    borderRadius: '3px',
                    fontWeight: 'bold'
                  }}
                ></FeaturePost>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <AboutMe />
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}
