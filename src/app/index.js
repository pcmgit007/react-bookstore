import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
//import { Provider } from 'react-redux'
//import { ConnectedRouter } from 'react-router-redux'
//import { createStore } from 'redux'
import Dashboard from './components/dashbord/Dashboard'
import App from './components/app/App'
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


//let store = createStore(todoApp)



render((
	  <BrowserRouter>
	    <App  />
	  </BrowserRouter>
	),
	  document.getElementById('main')
	);


