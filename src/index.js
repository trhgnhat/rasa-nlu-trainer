// @flow

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import enUS from 'antd/lib/locale-provider/en_US'
import { LocaleProvider } from 'antd'
import * as actions from './actions'
import './index.css'
import isOnline from './isOnline'
import store from './store'

// only request data from the server if it is running locally
if (!isOnline) {
  store.dispatch(actions.loadData())
}
global.store = store //DEBUG

ReactDOM.render(
  <Provider store={store}>
    <LocaleProvider locale={enUS}>
      <App />
    </LocaleProvider>
  </Provider>,
  document.getElementById('root')
)
