import { connect } from 'react-redux'
import { activateUserAccount, clean } from '../../actions'
/*  This is a container component. Notice it does not contain any JSX,
    nor does it import React. This component is **only** responsible for
    wiring in the actions and state necessary to render a presentational
    component - in this case, the counter:   */
import { getUserEmail } from '../../../../utils/launchParamsSelector'
import EmailVerification from '../components/EmailVerification'

const mapDispatchToProps = {
    activateUserAccount,
    clean
}

const mapStateToProps = (state, props) => ({
    isLoading: state.authorization.isLoading,
    accountActive: state.authorization.accountActive,
    initialValues: {
        email: getUserEmail(props)
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(EmailVerification)
