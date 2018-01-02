import React from 'react'
import Book from './img/book1.jpg'
import styles from './home.css';
const Home =()=>{
	return(
		
		<div className="row">
			<div className="col-md-6">
				<div className="imgContainer">
					<img src={Book} alt="book1" />
				</div>
			</div>
			<div className="col-md-6">
				<div className="titleContainer">
					<h2 className="text"> Welcome </h2>
				</div>
			</div>
		</div>
	)
}

export default Home