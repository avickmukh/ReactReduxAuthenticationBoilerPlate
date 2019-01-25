import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form';

import { footerConst, registerButtonText, registerAccountTitle } from '../../../../utils/constants'
import NavigationSection from '../../Common/NavigationSection'
import { registerSectionObject } from '../../utils/config'
import { AccountFormDiv, 
    AccountFormOuterDiv, 
    AccountFormLogo, 
    AccountTitle,
    AccountFooterDiv, AccountInputGroupPrependDiv,
    AccountActionsDiv, AccountFormGroup, AccountFormControl,
    AccountActionsButton, AuthenticationFormField } from '../../Common/ReactStyled'
import RenderField from '../../Common/RenderField'
import { registerValidate } from '../../../../utils/validator'

class RegisterComponent extends Component {
  
  constructor(props){
    super(props)
    this.createNewUser = this.createNewUser.bind(this)
  }

  componentWillMount(){
     // console.log('component will mount', this.props.params.business)
  }

  componentDidMount(){
    // console.log('component Did mount', this.props.params.business)
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.userEmail !== this.props.userEmail){
        this.context.router.history.push('/email-verification/'+nextProps.userEmail)
    }
  }

  componentWillUnmount() {
    this.props.clean()
  }
  
  createNewUser(values){
    this.props.createUser({...values})
  }

  render(){
    const { handleSubmit, pristine, reset, submitting } = this.props;
      return (
              <div className="row no-gutters">
                   <div className="col-md-6">
                        <AccountFormOuterDiv>
                            <AccountFormDiv>
                                <AccountFormLogo> 
                                    LOGO 
                                </AccountFormLogo>
                                <form action="#" method="post" onSubmit={handleSubmit(this.createNewUser)}>
                                    <AccountTitle>{registerAccountTitle}</AccountTitle>
                                    <AccountFormGroup>
                                        <Field 
                                            name="name"
                                            type="Name"
                                            placeholder='User Name'
                                            iconClassName="fa fa fa-user-circle"
                                            component={RenderField}
                                        />   
                                    </AccountFormGroup>
                                    <AccountFormGroup>
                                        <Field 
                                            name="email"
                                            type="text"
                                            placeholder='Email'
                                            iconClassName="fa fa-envelope"
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
                                    <AccountFormGroup>
                                        <Field 
                                            name="password_confirmation"
                                            type="password"
                                            placeholder='Confirm Password'
                                            iconClassName="fa fa-key"
                                            component={RenderField}
                                        />                                      
                                    </AccountFormGroup>
                                    {/* <AccountFormGroup className="pt-3">
                                        <div className="custom-control custom-checkbox mb-3">
                                            <Field 
                                            type="checkbox" 
                                            className="custom-control-input" 
                                            id="customCheck"
                                            component='input' 
                                            name="termAgree" />
                                            <label className="custom-control-label" htmlFor="customCheck">I agree all statements in terms of service</label>
                                        </div>
                                    </AccountFormGroup> */}
                                    <AccountActionsDiv>
                                        <AccountActionsButton 
                                            type="submit" 
                                            className="btn btn-block btn-rounded btn-info">
                                        {registerButtonText}</AccountActionsButton>
                                    </AccountActionsDiv>
                                    <AccountFooterDiv>
                                        <p>{footerConst}</p>
                                    </AccountFooterDiv>
                                </form>
                            </AccountFormDiv>
                        </AccountFormOuterDiv>
                    </div>
                  <div className="col-md-6">
                    <NavigationSection sectionObject={registerSectionObject} />
                  </div>
              </div>
      )
  }
}
RegisterComponent.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    pristine: PropTypes.bool.isRequired,
    submitting: PropTypes.bool.isRequired,
    createUser: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    userEmail:PropTypes.string.isRequired,
    clean: PropTypes.func.isRequired
}

RegisterComponent.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default reduxForm({
    form: 'registerForm',
    enableReinitialize: true,
    touchOnChange: true,
    validate: registerValidate,
    destroyOnUnmount: true
})(RegisterComponent);
