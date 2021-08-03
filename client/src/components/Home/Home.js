import React, { Fragment } from 'react'
import About from '../Layout/About'
import Subcribe from '../Layout/Subcribe'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import Recipes from './Recipes'

export default function Home() {
  return (
    <Fragment>
      <Header></Header>
      <Recipes />
      <About />
      <Subcribe />
      <Footer></Footer>
    </Fragment>
  )
}
