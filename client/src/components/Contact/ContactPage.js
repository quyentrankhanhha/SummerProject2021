import React, { Fragment } from 'react'
import { Grid, Container } from '@material-ui/core'
import Banner from '../Layout/Banner'
import Form from './Form'
import Map from './Map'
import ContactInfo from './ContactInfo'

export default function ContactPage() {
  return (
    <Fragment>
      <Banner title='Contact' page='Contact' source='/assets/banner.webp' />
      <section className='section-spacing'>
        <Container>
          <Grid container spacing={5}>
            <Grid item xs>
              <Map />
            </Grid>
            <Grid item xs>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </section>
      <ContactInfo />
    </Fragment>
  )
}
