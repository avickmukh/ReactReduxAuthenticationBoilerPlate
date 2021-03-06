import { injectReducer } from '../../store/reducers'
// import { injectSaga } from '../../../store/createStore'
// import authSaga from '../saga'
import { userIsAuthenticatedRedir } from '../../utils'


export default (store) => ({
  path:'/dashboard',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const dashboard = require('./containers/DashboardContainer').default
      const reducer = require('./reducer').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'dashboard', reducer })

      /*  Return getComponent   */
      cb(null, userIsAuthenticatedRedir(dashboard))

    /* Webpack named bundle   */
    }, 'dashboard')
  }
})
