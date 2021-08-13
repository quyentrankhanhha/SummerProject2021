import React, { Fragment } from 'react'

import { Container } from '@material-ui/core'

import Banner from '../Layout/Banner'
import SmallNews from './SmallNews'

export default function LifestylePage() {
  return (
    <Fragment>
      <Banner title='Lifestyle' page='Lifestyle' source='/assets/banner.webp' />
      <Container>
        <SmallNews link='/article' />
      </Container>
    </Fragment>
  )
}
