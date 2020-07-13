import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import App from './App'
import { ThemeProvider } from 'styled-components'
import colors from './themes/style/main'
import './themes/sass/index.sass'
import * as serviceWorker from './serviceWorker'


ReactDOM.render(
  <Provider store ={store} >
    <ThemeProvider theme={colors}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
