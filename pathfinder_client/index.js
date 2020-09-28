import React from 'react'
import ReactDOM from 'react-dom'
import {CreateStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'


const store = CreateStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

ReactDOM.render(
    <Provider store ={store}>
        <App/>
   </Provider>,
document.getElementById('root')
)