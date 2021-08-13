import React, { Fragment } from 'react'

import WatchVideo from '../Layout/WatchVideo'
import About from '../Layout/About'
import Banner from '../Layout/Banner'

export default function AboutPage() {
  return (
    <Fragment>
      <Banner title='About Us' page='About' source='/assets/banner.webp' />
      <About />
      <WatchVideo />
    </Fragment>
  )
}
