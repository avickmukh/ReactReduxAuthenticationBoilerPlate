import { connect } from 'react-redux'
import { sendForgotEmailToken, clean, changePassword } from '../../actions'
import ForgotPassword from '../components/ForgotPassword'
import { forgotPasswordValidate, forgotEmailValidate } from '../../../../utils/validator'

const mapDispatchToProps = {
    sendForgotEmailToken,
    clean,
    changePassword
}

const mapStateToProps = (state, props) => ({
    isLoading: state.authorization.isLoading,
    forgotTokenSend:state.authorization.forgotTokenSend,
    changeForgotPassword: state.authorization.changeForgotPassword,
    form: props.forgotTokenSend === false ? 'forgotEmailPasswordForm' : 'forgotPasswordForm',
    validate: props.forgotTokenSend === false ? forgotEmailValidate : forgotPasswordValidate 
})


export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword)
