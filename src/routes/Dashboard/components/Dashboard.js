import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Dashboard extends Component {
  
  constructor(props){
    super(props)
    this.logoutUser = this.logoutUser.bind(this)
  }

  logoutUser(){
    this.props.logout()
  }

  render(){
    let text = 'Welcome to Dashboard'
    if(localStorage && localStorage.getItem('user') !== null) {
      text = text+ ' '+ localStorage.getItem('user')
    }
    const { } = this.props;
      return (
              <div className="row no-gutters">
                  <div className='col-md-6'><h1>{text}</h1></div>
                  <div className='col-md-6'><button onClick={this.logoutUser}>Logout</button></div>
              </div>
      )
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
}

export default Dashboard