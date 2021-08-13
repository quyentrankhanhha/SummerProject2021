import React, { Fragment } from 'react'
import Banner from '../Layout/Banner'
import { Container, Grid } from '@material-ui/core'
import classes from './ArticlePage.module.css'
import Blog from './Blog'
import Categories from './Categories'
import RecentBlogs from './RecentBlogs'

export default function ArticlePage() {
  return (
    <Fragment>
      <Banner
        title='Article Single'
        page='Article Single'
        source='/assets/banner.webp'
      />
      <section className='section-spacing'>
        <Container>
          <Grid container spacing={10}>
            <Grid item xs={4}>
              <h3 className={classes.heading}>Categories</h3>
              <Categories />
              <h3 className={classes.heading}>Recent Blogs</h3>
               <RecentBlogs source='/assets/featurepost1.jpeg' text='Even the all-powerful Pointing has no control about the blind texts' date='September 14, 2021' comments='19'/>
             <RecentBlogs source='/assets/featurepost1.jpeg' text='Even the all-powerful Pointing has no control about the blind texts' date='September 14, 2021' comments='19'/>
            </Grid>
            <Grid item xs={8}>
              <Blog />
            </Grid>
          </Grid>
        </Container>
      </section>
    </Fragment>
  )
}


