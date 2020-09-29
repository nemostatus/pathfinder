import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {rootReducer} from './reducers/rootReducer'
import App from './components/App'
import { UsersContainer } from './components/UsersContainer'





const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

ReactDOM.render(
    <Provider store ={store}>
     <UsersContainer />


   </Provider>,
document.getElementById('root')
)

