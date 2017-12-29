import React from 'react'
import styles from './dashboard.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Dashboard extends React.Component {
	constructor(){
		super();
		this.state={
			data:[
			    {'name': 'Super card', 'id': 1},
			    {'name': 'Other card', 'id': 2},
			    {'name': 'Last card', 'id': 3}
			]
		}
	}
    render() {
        return(
        	<div>
        		<h2 className="heading">Dashboard</h2>
        		<div className ="row space">
	      			<div className="col-md-6">
	      				<div className="box1">
			        		{
				        		this.state.data.map((dynamicData,i)=>
				        			<div>
					        			<h4> {dynamicData.name} </h4>
					        			<p>{dynamicData.id}</p>
					        		</div>
				        		)
			        		}
			        	</div>
			        </div>
			        <div className="col-md-6">
	      				<div className="box1">
			        		{
				        		this.state.data.map((dynamicData,i)=>
				        			<div>
					        			<h4> {dynamicData.name} </h4>
					        			<p>{dynamicData.id}</p>
					        		</div>
				        		)
			        		}
			        	</div>
			        </div>
			    </div>
			    <div className ="row space">
	      			<div className="col-md-6">
	      				<div className="box1">
			        		{
				        		this.state.data.map((dynamicData,i)=>
				        			<div>
					        			<h4> {dynamicData.name} </h4>
					        			<p>{dynamicData.id}</p>
					        		</div>
				        		)
			        		}
			        	</div>
			        </div>
			        <div className="col-md-6">
	      				<div className="box1">
			        		{
				        		this.state.data.map((dynamicData,i)=>
				        			<div>
					        			<h4> {dynamicData.name} </h4>
					        			<p>{dynamicData.id}</p>
					        		</div>
				        		)
			        		}
			        	</div>
			        </div>
			    </div>
			</div>
        )
    }
}

export default Dashboard

/*import React from 'react'
import styles from './dashboard.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Dashboard = ({match}) => {
	return(
		<div>
	      <h2 className="heading">Dashboard</h2>
	      <div className ="row space">
	      	<div className="col-md-6">
	      		<div className="box1">
	      			<h4> Top Selling </h4>
	      			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam architecto at exercitationem ipsa iste molestiae nobis odit! Error quo reprehenderit velit! Aperiam eius non odio optio, perspiciatis suscipit vel?</p>
	      		</div>
	      	</div>
	      	<div className="col-md-6">
	      		<div className="box2">
	      			<h4> Top Rentals </h4>
	      			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam architecto at exercitationem ipsa iste molestiae nobis odit! Error quo reprehenderit velit! Aperiam eius non odio optio, perspiciatis suscipit vel?</p>

	      		</div>
	      	</div>
	      </div>
	       <div className ="row space">
	      	<div className="col-md-6">
	      		<div className="box3">
	      			<h4> Top Selling </h4>
	      			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam architecto at exercitationem ipsa iste molestiae nobis odit! Error quo reprehenderit velit! Aperiam eius non odio optio, perspiciatis suscipit vel?</p>
	      		</div>
	      	</div>
	      	<div className="col-md-6">
	      		<div className="box4">
	      			<h4> Top Rentals </h4>
	      			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam architecto at exercitationem ipsa iste molestiae nobis odit! Error quo reprehenderit velit! Aperiam eius non odio optio, perspiciatis suscipit vel?</p>

	      		</div>
	      	</div>
	      </div>
	    </div>
	)
}

export default Dashboard*/