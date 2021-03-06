import { userIsAuthenticatedRedir } from '../../utils'


export default (store) => ({
  path:'/',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const home = require('./components/Home').default
     // const reducer = require('./modules/counter').default

      /*  Add the reducer to the store on key 'counter'  */
      // injectReducer(store, { key: 'register' })

      /*  Return getComponent   */
      cb(null, userIsAuthenticatedRedir(home))

    /* Webpack named bundle   */
    }, 'register')
  }
})
