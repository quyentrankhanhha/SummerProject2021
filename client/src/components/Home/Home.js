import React, { Fragment } from 'react'
import About from '../Layout/About'
import Subcribe from '../Layout/Subcribe'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import Recipes from './Recipes'
import FeaturePosts from './FeaturePosts'
import RecentStories from './RecentStories'
import WatchVideo from '../Layout/WatchVideo'
import HomeSlider from './HomeSlider'

export default function Home() {
  return (
    <Fragment>
      <Header></Header>
      <HomeSlider></HomeSlider>
      <RecentStories></RecentStories>
      <FeaturePosts></FeaturePosts>
      <WatchVideo></WatchVideo>
      <Recipes />
      <About />
      <Subcribe />
      <Footer></Footer>
    </Fragment>
  )
}
