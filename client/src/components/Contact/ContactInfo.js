import React from 'react'
import { Container, Grid } from '@material-ui/core'
import ContactIcon from '../UI/ContactIcon'

export default function ContactInfo() {
  return (
    <section className='spacing-section'>
      <Container>
        <Grid container spacing={5}>
          <ContactIcon
            icon={<span class='fas fa-map-signs'></span>}
            title='Adress'
            subtitle='198 West 21th Street, Suite 721 New York NY 10016'
          />
          <ContactIcon
            icon={<span class='fas fa-map-signs'></span>}
            title='Contact Number'
            subtitle='+ 1235 2355 98'
          />
          <ContactIcon
            icon={<span class='fas fa-map-signs'></span>}
            title='Email Address'
            subtitle='info@yoursite.com'
          />
          <ContactIcon
            icon={<span class='fas fa-map-signs'></span>}
            title='Website'
            subtitle='haquyen.com'
          />
        </Grid>
      </Container>
    </section>
  )
}
