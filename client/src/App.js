import './App.css'
import React, { Fragment } from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './components/Home/Home'

function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path='/about'></Route>
          <Route path='/foods'></Route>
          <Route path='/lifestyle'></Route>
          <Route path='/contact'></Route>
          <Route path='/'>
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </Fragment>
  )
}

export default App
