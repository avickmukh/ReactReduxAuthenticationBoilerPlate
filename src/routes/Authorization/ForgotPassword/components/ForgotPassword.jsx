import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { reduxForm, Field, reset } from 'redux-form';

import { emailVerificationValidate } from '../../../../utils/validator'

import { footerConst, sendEmailButtonText, changePasswordButtonText } from '../../../../utils/constants'
import { AccountFormDiv, AccountFormOuterDiv, AccountFormLogo, AccountTitle,
     AccountFooterDiv, AccountInputGroupPrependDiv,
    AccountActionsDiv, AccountFormGroup,
    AccountActionsButton, TokenDiv, AuthenticationFormField } from '../../Common/ReactStyled'

import RenderField from '../../Common/RenderField'

class ForgotPasswordComponent extends Component {
  
  constructor(props){
    super(props)
    this.state = {}
    this.sendForgotEmailToken = this.sendForgotEmailToken.bind(this)
    this.changePassword = this.changePassword.bind(this)
  }

  componentWillMount(){
     // console.log('component will mount', this.props.params)
  }

  componentDidMount(){
    // this.otpTimerStart()
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.changeForgotPassword === true){
        this.context.router.history.push('/login')
    }
  }

  componentWillUnmount() {
    this.props.clean()
  }

  sendForgotEmailToken(values){
    this.props.sendForgotEmailToken({...values})
  }

  changePassword(values){
    this.props.changePassword({...values})
  }

  render(){
      const { handleSubmit, pristine, reset, submitting, userEmail, forgotTokenSend } = this.props;
      return (
              <div className="row no-gutters">
                   <div className="col-md-12">
                        <AccountFormOuterDiv>
                            <AccountFormDiv>
                                <AccountFormLogo> 
                                    LOGO
                                </AccountFormLogo>
                                {
                                    forgotTokenSend === false ? (
                                        <form action="#" method="post" 
                                        onSubmit={handleSubmit(this.sendForgotEmailToken)}>
                                            <AccountTitle>Please insert your email</AccountTitle>
                                            <AccountFormGroup>
                                                <Field 
                                                    name="email"
                                                    type="text"
                                                    placeholder='Email'
                                                    iconClassName="fa fa-envelope"
                                                    component={RenderField}
                                                />
                                            </AccountFormGroup>                                
                                            <AccountActionsDiv>
                                                <AccountActionsButton 
                                                    type="submit" 
                                                    className="btn btn-block btn-rounded btn-info">
                                                {sendEmailButtonText}</AccountActionsButton>
                                            </AccountActionsDiv>
                                            <AccountFooterDiv>
                                                <p>{footerConst}</p>
                                            </AccountFooterDiv>
                                        </form>
                                    )
                                    :
                                    (
                                        <form action="#" method="post" 
                                        onSubmit={handleSubmit(this.changePassword)}>
                                            <AccountTitle>Please Type New Password With Token</AccountTitle>
                                            <AccountFormGroup>
                                                <Field 
                                                    name="password"
                                                    type="password"
                                                    placeholder='Password'
                                                    iconClassName="fa fa-key"
                                                    component={RenderField}
                                                />
                                            </AccountFormGroup>   
                                            <AccountFormGroup>
                                                <Field 
                                                    name="password_confirmation"
                                                    type="password"
                                                    placeholder='Confirm Password'
                                                    iconClassName="fa fa-key"
                                                    component={RenderField}
                                                />
                                            </AccountFormGroup>   
                                            <AccountFormGroup>
                                                <Field 
                                                    name="token"
                                                    type="password"
                                                    placeholder='Token'
                                                    iconClassName="fa fa-key"
                                                    component={RenderField}
                                                />
                                            </AccountFormGroup>                                
                                            <AccountActionsDiv>
                                                <AccountActionsButton 
                                                    type="submit" 
                                                    className="btn btn-block btn-rounded btn-info">
                                                {changePasswordButtonText}</AccountActionsButton>
                                            </AccountActionsDiv>
                                            <AccountFooterDiv>
                                                <p>{footerConst}</p>
                                            </AccountFooterDiv>
                                        </form>
                                    )
                                }                               
                            </AccountFormDiv>
                        </AccountFormOuterDiv>
                    </div>
              </div>
      )
  }
}

ForgotPasswordComponent.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    pristine: PropTypes.bool.isRequired,
    submitting: PropTypes.bool.isRequired,
    sendForgotEmailToken: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    forgotTokenSend: PropTypes.bool.isRequired,
    clean: PropTypes.func.isRequired,
    changePassword: PropTypes.func.isRequired,
    changeForgotPassword: PropTypes.bool.isRequired,
}

ForgotPasswordComponent.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default reduxForm(props => ({    
    enableReinitialize: false,
    touchOnChange: true,
    destroyOnUnmount: true,
    // onSubmitSuccess: dispatch(reset('forgotEmailPasswordForm'))
    // validate: this.props.forgotTokenSend === false ? forgotEmailValidate : forgotPasswordValidate 
}))(ForgotPasswordComponent);