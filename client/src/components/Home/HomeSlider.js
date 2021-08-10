import React from 'react'
import classes from './HomeSlider.module.css'
import { Container } from '@material-ui/core'
import Carousel from '../UI/Carousel/Carousel'
export default function HomeSlider() {
  return (
    <div className={classes.slider}>
      <Container>
        <Carousel></Carousel>
      </Container>
    </div>
  )
}
