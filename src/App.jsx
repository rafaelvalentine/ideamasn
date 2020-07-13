import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
// import Error from './tools/Error/errorHandling'
import Routes from './routes/index.routes.jsx'
import Navbar from './components/navbar'
import ScrollToTop from './tools/ScrollToTop'
import Loader from './containers/loader'
import './themes/sass/app.sass'

export default () => {
  return (
    <div id='App'>
      <Loader />
      {/* <Error> */}
      {/* </Error> */}
      <Router>
        <Navbar />
        <ScrollToTop>
          <Routes />
        </ScrollToTop>
      </Router>
    </div>
  )
}
