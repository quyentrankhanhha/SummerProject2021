import './App.css'
import React, { Fragment } from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import HomePage from './components/Home/HomePage'
import AboutPage from './components/About/AboutPage'
import Subcribe from './components/Layout/Subcribe'
import LifestylePage from './components/Lifestyle/LifestylePage'
import ContactPage from './components/Contact/ContactPage'

function App() {
  return (
    <Fragment>
      <Router>
        <Header />
        <Switch>
          <Route path='/about'>
            <AboutPage />
          </Route>
          <Route path='/foods'></Route>
          <Route path='/lifestyle'>
            <LifestylePage />
          </Route>
          <Route path='/contact'>
            <ContactPage />
          </Route>
          <Route path='/'>
            <HomePage />
          </Route>
        </Switch>
        <Subcribe />
        <Footer />
      </Router>
    </Fragment>
  )
}

export default App
