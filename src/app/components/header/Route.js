import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from '../dashbord/Dashboard'
import Contact from '../contactUs/Contactus'
import Home from '../home/Home'

const Routes =()=> (
	
	    <Switch>
	      <Route exact path='/' component={Home}/>
	      <Route path='/dashboard' component={Dashboard}/>
	      <Route path='/contactUs' component={Contact}/>
	      
	    </Switch>
  
)

export default Routes