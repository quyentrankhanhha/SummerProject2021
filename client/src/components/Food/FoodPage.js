import React, { Fragment } from 'react'
import Banner from '../Layout/Banner'
import { Container, Grid, Box } from '@material-ui/core'
import AboutMe from '../UI/AboutMe'
import Categories from '../Layout/Categories'
import FeaturePost from '../Home/FeaturePost'
import PaginationLink from '../UI/PaginationLink'

export default function FoodPage() {
  return (
    <Fragment>
      <Banner title='Food' page='Food' source='/assets/banner.webp' />
      <section className='section-spacing'>
        <Container>
          <Grid container spacing={5}>
            <Grid item container xs={9} spacing={5}>
              <Box display='flex' flexWrap='wrap'>
                <Box flex='0 0 33%' p={3}>
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
                  />
                </Box>
                <Box flex='0 0 33%' p={3}>
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
                  />
                </Box>
                <Box flex='0 0 33%' p={3}>
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
                  />
                </Box>
                <Box flex='0 0 33%' p={3}>
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
                  />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={3}>
              <AboutMe></AboutMe>
              <Categories />
            </Grid>
          </Grid>
        </Container>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            padding: '2rem 1rem'
          }}
        >
          <PaginationLink />
        </div>
      </section>
    </Fragment>
  )
}
