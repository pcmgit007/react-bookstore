import React from 'react'
import { Link } from 'react-router-dom'

const Header =() =>{
	return(
	      <nav className="navbar navbar-default">
	        <div className="container-fluid">
	          <div className="navbar-header">
	            <a className="navbar-brand"><Link to='/'>Book Store</Link></a>
	          </div>
	        </div>
	      </nav>
	     
		)
};


export default Header