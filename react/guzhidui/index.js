import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducer from './reducers'
import { getAllPapers } from './actions'
import App from './components/App'

const middleware = [ thunk ]
const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

store.dispatch(getAllPapers())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)