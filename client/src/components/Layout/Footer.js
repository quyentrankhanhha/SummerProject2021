import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import { Grid, Container } from '@material-ui/core'
import classes from '../Layout/Footer.module.css'

export default function Footer() {
  return (
    <Fragment>
      <footer>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs>
              <div className={classes.col}>
                <h2>Stories</h2>
                <p className={classes['mb-4']}>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <div className={classes.stories}>
                  <ul>
                    <li>
                      <Link>
                        <span className='fab fa-twitter'></span>
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <span className='fab fa-facebook-f'></span>
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <span className='fab fa-instagram'></span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Grid>
            <Grid item xs>
              <div className={classes.col}>
                <h2>Information</h2>
                <ul>
                  <li>
                    <Link>Terms of Uses</Link>
                  </li>
                  <li>
                    <Link>About Stories</Link>
                  </li>
                  <li>
                    <Link>Privacy Policy</Link>
                  </li>
                  <li>
                    <Link>Accessibility Help</Link>
                  </li>
                  <li>
                    <Link>Advertise with us</Link>
                  </li>
                </ul>
              </div>
            </Grid>
            <Grid item xs>
              <div className={classes.col}>
                <h2> Categories</h2>
                <ul>
                  <li>
                    <Link>Food</Link>
                  </li>
                  <li>
                    <Link>Restaurant</Link>
                  </li>
                  <li>
                    <Link>Dessert</Link>
                  </li>
                  <li>
                    <Link>Lifestyle</Link>
                  </li>
                  <li>
                    <Link>Recipes</Link>
                  </li>
                </ul>
              </div>
            </Grid>
            <Grid item xs>
              <div className={classes.col}>
                <h2>Have a Questions?</h2>
                <div className={classes.question}>
                  <ul>
                    <li>
                      <span>
                        <i className='fas fa-map-marker-alt'></i>
                      </span>
                      <span>
                        Oulu University of Applied Sience, Oulu, Finland{' '}
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className='fas fa-phone-alt'></i>
                      </span>
                      <span>+123456789</span>
                    </li>
                    <li>
                      <span>
                        <i className='fas fa-envelope'></i>
                      </span>
                      <span>t9qutr00@students.oamk.fi</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </footer>
    </Fragment>
  )
}
