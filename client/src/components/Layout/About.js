import React from 'react'
import { Grid, Box, Container } from '@material-ui/core'

import AboutContent from '../UI/AboutContent'
import classes from '../Layout/About.module.css'

export default function About() {
  return (
    <section className={classes.about}>
      <Container>
        <Grid container direction='row' justifyContent='center'>
          <Grid item xs>
            <div
              className={classes['about-img']}
              style={{
                backgroundImage: `url(/assets/about.webp)`,
                backgroundSize: 'cover'
              }}
            ></div>
          </Grid>
          <Grid item xs pr='2rem'>
            <Box p={3}>
              <h2>About Stories</h2>
              <p>
                Far far away, behind the word mountains, far fr iooom the
                countries Vokalia and Consonantia
              </p>
            </Box>
            <Box className={classes['about-infor']}>
              <AboutContent />
              <AboutContent />
              <AboutContent />
              <AboutContent />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}
