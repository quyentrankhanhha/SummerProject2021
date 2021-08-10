import React, { Fragment } from 'react'
import About from '../Layout/About'
import Recipes from './Recipes'
import FeaturePosts from './FeaturePosts'
import RecentStories from './RecentStories'
import WatchVideo from '../Layout/WatchVideo'
import HomeSlider from './HomeSlider'

export default function HomePage() {
  return (
    <Fragment>
      <HomeSlider />
      <RecentStories />
      <FeaturePosts />
      <WatchVideo />
      <Recipes />
      <About />
    </Fragment>
  )
}
