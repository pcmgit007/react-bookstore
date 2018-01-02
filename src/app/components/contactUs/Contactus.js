import React from 'react';
import styles from './contactus.css';
import Home from '../home/Home'
import { Link } from 'react-router-dom'

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2,
      nameField:'',
      emailField:'',
      queryField:''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  }
  handleSubmit(event){
    alert('Name is:'+ this.state.nameField+', Email:'+ this.state.emailField +', Query:'+  this.state.queryField);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="contactUscontainer">
          <h2 className="heading">Contact Us</h2>
           <div className="input-group">
              <label className="col-sm-2 control-label">Name: </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  name="nameField"
                  value={this.state.value}
                  onChange={this.handleInputChange}
                  className="form-control" required/>
              </div>
            </div>
            <br/>
            <div className="input-group">
              <label className="col-sm-2 control-label">Email: </label>
              <div className="col-sm-10">
                <input
                  type="email"
                  name="emailField"
                  value={this.state.value}
                  onChange={this.handleInputChange}
                  className="form-control" required/>
              </div>
            </div>
            <br/>
            <div className="input-group">
              <label className="col-sm-2 control-label">Query: </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  name="queryField"
                  value={this.state.value}
                  onChange={this.handleInputChange}
                  className="form-control" required/>
              </div>
            </div>
            <div className="contactFooter">
              <button type="submit"  value="Submit" class="btn btn-success">Submit</button>
              <button type="submit"  value="Home" class="btn btn-info"><Link to='/'>Home</Link></button>
            </div>
        </div>
      </form>
    );
  }
}

export default Contact;