import React from 'react'
import { AccountInputGroupPrependDiv,
    AuthenticationFormField } from './ReactStyled'

const RenderField = ({ input, iconClassName, name, type,
    placeholder, readOnly, meta: { touched, error } }) => (
        <div>
            <div className="input-group">
                <AccountInputGroupPrependDiv> 
                    <i className={iconClassName}></i> 
                </AccountInputGroupPrependDiv>
                <AuthenticationFormField
                    {...input}
                    type={type}
                    name={name} 
                    placeholder={placeholder} 
                    component='input'
                    autoComplete='off'
                    className="form-control"
                    required=""
                    readOnly={readOnly}
                />
            </div>
            {touched && (error && 
            <div className="input-group validationRed">
                {error}
            </div>)}
        </div>
    )

RenderField.defaultProps = {
    readOnly: false
}
export default RenderField
