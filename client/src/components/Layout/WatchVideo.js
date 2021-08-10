import React from 'react'
import { Link } from 'react-router-dom'
import classes from '../Layout/WatchVideo.module.css'
import { Grid } from '@material-ui/core'

function WatchVideo() {
  return (
    <section className={classes['watch-video']}>
      <Grid container>
        <Grid item xs={3} className={classes['watch-video_infor']}>
          <div>
            <p className={`mb-5`}>
              <Link className={classes['popup-video']}>
                Watch Video <span className='fas fa-caret-right'></span>
              </Link>
            </p>
            <h1 className={`mb-5`}>Roger Bosch</h1>
            <p className={`mb-5`}>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. Far far away, behind the word
              mountains, far from the countries Vokalia and Consonantia, there
              live the blind texts.
            </p>
            <span className={classes.signature}>Roger.Bosch</span>
          </div>
        </Grid>
        <Grid item xs={9} className={classes['watch-video_img']}>
          <div
            style={{ backgroundImage: 'url(/assets/watchvideo.webp)' }}
          ></div>
        </Grid>
      </Grid>
    </section>
  )
}

export default WatchVideo
