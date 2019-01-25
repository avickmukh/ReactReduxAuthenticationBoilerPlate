// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/PageLayout/PageLayout'
import AuthLayout from '../layouts/AuthLayout/AuthLayout'
import Home from './Home'
import DashboardRoute from './Dashboard'
import LoginRoute from './Authorization/Login'
import RegisterRoute from './Authorization/Register'
import EmailVerificationRoute from './Authorization/EmailVerification'
import NotFound from './NotFound'
import NotFoundLayout from '../layouts/NotFoundLayout/NotFoundLayout'
import ForgotPasswordRoute from './Authorization/ForgotPassword'



export const createRoutes = (store) => (
  [
    {
      component: CoreLayout,
      route: Home(store)
    },
    {
      component: CoreLayout,
      route: DashboardRoute(store)
    },
    {
      component: AuthLayout,
      route: LoginRoute(store)
    },
    {
      component: AuthLayout,
      route: ForgotPasswordRoute(store)
    },
    {
      component: AuthLayout,
      route: RegisterRoute(store)
    },
    {
      component: AuthLayout,
      route: EmailVerificationRoute(store)
    },
    {
      component: NotFoundLayout,
      route: NotFound(store)
    }
  ])

export default createRoutes
