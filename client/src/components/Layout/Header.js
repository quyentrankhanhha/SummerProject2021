import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import classes from '../Layout/Header.module.css'
import { Grid, Container } from '@material-ui/core'

export default function Header() {
  return (
    <Fragment>
      <header>
        <Container>
          <Grid container spacing={3} direction='row' justifyContent='flex-end'>
            <Grid item xs>
              <div className={classes.logo}>
                <span>Stories</span>
                <span>.</span>
              </div>
            </Grid>
            <Grid item xs>
              <nav>
                <ul className={classes.nav_links}>
                  <li>
                    <NavLink exact={true} to='/' activeClassName='active'>
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to='/about' activeClassName='active'>
                      About
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to='/foods' activeClassName='active'>
                      Foods
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to='/lifestyle' activeClassName='active'>
                      Lifestyle
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to='/contact' activeClassName='active'>
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </Grid>
          </Grid>
        </Container>
      </header>
    </Fragment>
  )
}
