import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import 'react-notifications/lib/notifications.css';
import 'font-awesome/css/font-awesome.min.css';

import asyncComponent from './AsyncComponent';

import CoreLayout from '../layouts/PageLayout/PageLayout'
import AuthLayout from '../layouts/AuthLayout/AuthLayout'
import NotFoundLayout from '../layouts/NotFoundLayout/NotFoundLayout'

// if(true){
//   console.log('hi')
// }

class App extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    routes: PropTypes.array.isRequired,
  }

  shouldComponentUpdate () {
    return false
  }

  render () {
    const { store, routes} = this.props

    const withLayout = (LayoutComp, ComponentComp) => <LayoutComp><ComponentComp /></LayoutComp>;
    const componentWithLayout = (layout, ComponentComp) => () => withLayout(layout, ComponentComp);
   
    const Routes = routes.map((childRoute, index) => {
      const RouteTemp = childRoute.route
      const ComponentComp = asyncComponent(RouteTemp.getComponent)
      return (<Route 
                path={RouteTemp.path} 
                key={RouteTemp.path}
                exact 
                render={props => (
                  <childRoute.component>
                    <ComponentComp {...props}/>
                  </childRoute.component>
                )}
                />)
    })

    return (
      <Provider store={store}>
        <Router>
          <Switch>
              {Routes}
          </Switch>
        </Router>        
      </Provider>
    )
  }
}

export default App
