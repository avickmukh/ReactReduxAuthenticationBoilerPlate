import React, { Component } from 'react'

class HomeComponent extends Component {
  
  constructor(props){
    super(props)
  }

  componentWillMount(){
      // console.log('component will mount', this.props.params.business)
  }

  componentDidMount(){
   // console.log('component Did mount', this.props.params.business)
  }

  render(props){
      return (
        <div>
          <div>Home Page</div>
        </div>
      )
  }
}

export default HomeComponent