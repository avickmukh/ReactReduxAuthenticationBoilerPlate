import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form';

import { footerConst, loginButtonText, loginAccountTitle } from '../../../../utils/constants'
import NavigationSection from '../../Common/NavigationSection'
import { loginSectionObject } from '../../utils/config'
import { loginValidate } from '../../../../utils/validator'

import { AccountFormDiv, AccountFormOuterDiv, AccountFormLogo,
    AccountTitle, AccountFooterDiv,
    AccountActionsDiv, AccountFormGroup,
    AccountActionsButtonLink, AccountActionsButton } from '../../Common/ReactStyled'

import RenderField from '../../Common/RenderField'

class LoginComponent extends Component {
  
  constructor(props){
    super(props)
    this.loginUser = this.loginUser.bind(this)
  }

  componentWillMount(){
      // console.log('component will mount', this.props.params.business)
  }

  componentDidMount(){
    // console.log('component Did mount', this.props.params.business)
  }

  componentWillUnmount() {
    // this.props.clean()
  }

  loginUser(values){
    this.props.loginUser({...values})
  }

  render(props){
    const { handleSubmit, pristine, reset, submitting } = this.props;
      return (
              <div className="row no-gutters">
                  <div className="col-md-6">
                      <NavigationSection sectionObject={loginSectionObject} />
                  </div>
                  <div className="col-md-6">
                      <AccountFormOuterDiv>
                          <AccountFormDiv>
                              <AccountFormLogo> 
                                LOGO 
                              </AccountFormLogo>
                              <form action="#" method="post" onSubmit={handleSubmit(this.loginUser)}>
                                  <AccountTitle>{loginAccountTitle}</AccountTitle>
                                  <AccountFormGroup>
                                    <Field 
                                            name="email"
                                            type="text"
                                            placeholder='Email'
                                            iconClassName="fa fa-user-circle"
                                            component={RenderField}
                                        />
                                  </AccountFormGroup>
                                  <AccountFormGroup>
                                        <Field 
                                            name="password"
                                            type="password"
                                            placeholder='Password'
                                            iconClassName="fa fa-key"
                                            component={RenderField}
                                        />                                    
                                  </AccountFormGroup>
                                  <AccountActionsDiv>  
                                      <AccountActionsButtonLink to={{ pathname: 
                                        `${loginSectionObject.forgotPasswordSecAnchorPath}` }}>
                                      Forgot Password?</AccountActionsButtonLink>
                                      <AccountActionsButton 
                                        type="submit" 
                                        // disabled={submitting}
                                        className="btn btn-rounded btn-info">
                                        {loginButtonText}</AccountActionsButton>
                                  </AccountActionsDiv>
                                  <AccountFooterDiv>
                                      <p>{footerConst}</p>
                                  </AccountFooterDiv>
                              </form>
                          </AccountFormDiv>
                      </AccountFormOuterDiv>
                  </div>
              </div>
      )
  }
}

LoginComponent.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    pristine: PropTypes.bool.isRequired,
    submitting: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    clean: PropTypes.func.isRequired,
    loginUser: PropTypes.func.isRequired,
}

export default reduxForm({
    form: 'loginForm',
    enableReinitialize: true,
    touchOnChange: true,
    validate: loginValidate,
    destroyOnUnmount: true
})(LoginComponent);