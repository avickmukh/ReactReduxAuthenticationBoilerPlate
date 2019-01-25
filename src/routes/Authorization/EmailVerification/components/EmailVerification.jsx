import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form';

import { emailVerificationValidate } from '../../../../utils/validator'

import { footerConst, emailVerifyButtonText } from '../../../../utils/constants'
import { AccountFormDiv, AccountFormOuterDiv, AccountFormLogo, AccountTitle,
     AccountFooterDiv, AccountInputGroupPrependDiv,
    AccountActionsDiv, AccountFormGroup,
    AccountActionsButton, TokenDiv, AuthenticationFormField } from '../../Common/ReactStyled'

import RenderField from '../../Common/RenderField'

class EmailVerificationComponent extends Component {
  
  constructor(props){
    super(props)
    this.state = { otpTime: null, favourite: null };
    this.otpTimerStart = this.otpTimerStart.bind(this)
    this.activateAccount = this.activateAccount.bind(this)
  }

  componentWillMount(){
     // console.log('component will mount', this.props.params)
  }

  componentDidMount(){
    // this.otpTimerStart()
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.accountActive === true){
        this.context.router.history.push('/login')
    }
  }

  componentWillUnmount() {
    this.props.clean()
  }

  otpTimerStart(){
    const time=3*60
    let tmp=time; 
    this.setState({ otpTime: '3:00' });
    const id = setInterval(() =>{
        var c=tmp--,m=(c/60)>>0,s=(c-m*60)+'';
        this.setState({ otpTime: m+':'+(s.length>1?'':'0')+s
        });
    },1000);
  }

  activateAccount(values){
    this.props.activateUserAccount({...values})
  }

  render(){
      const { handleSubmit, pristine, reset, submitting, userEmail } = this.props;
      return (
              <div className="row no-gutters">
                   <div className="col-md-12">
                        <AccountFormOuterDiv>
                            <AccountFormDiv>
                                <AccountFormLogo> 
                                    LOGO
                                </AccountFormLogo>
                                <form action="#" method="post" onSubmit={handleSubmit(this.activateAccount)}>
                                    <AccountTitle>Verify Your Email</AccountTitle>
                                    <AccountFormGroup>
                                        <Field 
                                            name="email"
                                            type="text"
                                            placeholder='Email'
                                            iconClassName="fa fa-envelope"
                                            component={RenderField}
                                            readOnly
                                        />
                                    </AccountFormGroup>
                                    <AccountFormGroup>
                                        <Field 
                                            name="passcode"
                                            type="password"
                                            placeholder='Verification Code'
                                            iconClassName="fa fa fa-key"
                                            component={RenderField}
                                        />
                                    </AccountFormGroup>
                                    <AccountFormGroup className="pt-3">
                                        <TokenDiv className="mb-3">
                                            <label className="" htmlFor="">
                                                Your token will expire within 3 mins
                                            </label>
                                        </TokenDiv>
                                    </AccountFormGroup>
                                    <AccountActionsDiv>
                                        <AccountActionsButton 
                                            type="submit" 
                                            className="btn btn-block btn-rounded btn-info">
                                        {emailVerifyButtonText}</AccountActionsButton>
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

EmailVerificationComponent.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    pristine: PropTypes.bool.isRequired,
    submitting: PropTypes.bool.isRequired,
    activateUserAccount: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    initialValues: PropTypes.object.isRequired,
    accountActive: PropTypes.bool.isRequired,
    clean: PropTypes.func.isRequired,
}

EmailVerificationComponent.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default reduxForm({
    form: 'emailVerificationForm',
    enableReinitialize: true,
    touchOnChange: true,
    destroyOnUnmount: true,
    validate: emailVerificationValidate
})(EmailVerificationComponent);