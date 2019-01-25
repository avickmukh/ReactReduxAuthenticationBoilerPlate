import { injectReducer } from '../../../store/reducers'
import { injectSaga } from '../../../store/createStore'
import saga from '../saga'
import { userIsNotAuthenticated } from '../../../utils'


export default (store) => ({
  path : '/email-verification/:userEmail',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const verification = require('./containers/EmailVerificationContainer').default
      const reducer = require('../reducer').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'authorization', reducer })
      injectSaga(saga),
      /*  Return getComponent   */
      cb(null, userIsNotAuthenticated(verification))

    /* Webpack named bundle   */
    }, 'emailVerification')
  }
})
