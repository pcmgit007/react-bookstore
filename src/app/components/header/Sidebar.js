import React from 'react'
import styles from './sidebar.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Home from '../home/Home'
import Dashboard from '../dashbord/Dashboard'
import Contact from '../contactUs/Contactus'
import About from '../aboutUs/AboutUs'


const routes =[
	{
		path: '/',
	    exact: true,
	    sidebar: () => <div>home!</div>,
	    main: () => <h2>Home</h2>,
	    title:  'Home',
	    component: Home
	},{
		 path: '/dashboard',
	    exact: true,
	    sidebar: () => <div>Dashboard</div>,
	    main: () => <h2>Dashboard</h2>,
	    title: 'Dashboard',
	    component: Dashboard
	},
	{
		 path: '/contactUs',
	    exact: true,
	    sidebar: () => <div>contact</div>,
	    main: () => <h2>contactUs</h2>,
	    title: 'Contact Us',
	    component: Contact
	},
	{
		 path: '/aboutUs',
	    exact: true,
	    sidebar: () => <div>About</div>,
	    main: () => <h2>contactUs</h2>,
	    title: 'Contact Us',
	    component: About
	}	

]

const Sidebar =() =>{
	return(
		<Router>
			<div>
				<nav className="navbar navbar-default">
			        <div className="container-fluid">
			          <div className="navbar-header">
			            <a className="navbar-brand"><Link to='/'>Book Store</Link></a>
			          </div>
			        </div>
			    </nav>
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-2">
					      	<ul className="sidebarContainer">
					      		<li><Link to='/'></Link></li>
					      		<li><Link to='/dashboard'>Dashboard</Link></li>
					            <li><Link to ='/contactUs'>Contact Us</Link></li>
					            <li><Link to='/aboutUs'>About Us</Link></li>
					      	</ul>
					    </div>
					    <div className="col-md-10">
					        {routes.map((route, index) => (
					          // Render more <Route>s with the same paths as
					          // above, but different components this time.
					          <Route
					            key={index}
					            path={route.path}
					            exact={route.exact}
					            name ={route.title}
					            component={route.component}
					          />
					        ))}
					    </div>
				    </div>
			    </div>
			</div>
		</Router>
	)
}

export default Sidebar;
