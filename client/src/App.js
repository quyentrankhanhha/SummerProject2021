import './App.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import Subcribe from './components/Layout/Subcribe'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/about'></Route>
        <Route path='/foods'></Route>
        <Route path='/lifestyle'></Route>
        <Route path='/contact'></Route>
        <Route path='/'>
          <Header></Header>
          <Subcribe></Subcribe>
          <Footer></Footer>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
