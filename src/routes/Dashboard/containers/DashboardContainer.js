import { connect } from 'react-redux'
import { logoutUser } from '../../Authorization/actions'
import { clean, logout } from '../actions'

import Dashboard from '../components/Dashboard'

const mapDispatchToProps = {
  logoutUser,
  clean,
  logout
}

const mapStateToProps = (state) => ({
    
})


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
