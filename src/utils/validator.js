import { isEmpty, isString, isEmail } from 'lodash'

export const validateEmail = (val) => {
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val))
  {
    return true
  }
   return false
}
export const isSpaceOnly = (val) => {
    const r = val.trim().replace(/\s/g, '')
    return (r.length === 0)
}

export const checkEmailValidation = (val) => {
    if(isEmpty(val) || isSpaceOnly(val)) {
        return 'Please insert user email'
    } else if(!validateEmail(val)) {
        return 'Please insert proper email id'
    }
    return undefined
}

export const checkPasswordValidation = (val) => {
    if(isEmpty(val) || isSpaceOnly(val)) {
        return 'Please insert user password'
    } else if(val.trim().length < 6) {
        return 'Your password length is less than 6'
    }
    return undefined
}

export const checkUserNameValidation = (val) => {
    if(isEmpty(val) || isSpaceOnly(val)) {
        return 'Please insert user name'
    }
    return undefined
}

export const loginValidate = (value) => {
    const loginErrors = {}
    loginErrors.email = checkEmailValidation(value.email)
    loginErrors.password = checkPasswordValidation(value.password)
    return loginErrors
}

export const checkPasswordConfirm = (confirmPassword, password ) => {
    if(isEmpty(confirmPassword) || isSpaceOnly(confirmPassword)) {
        return 'Please insert proper confirm password'
    } else if (confirmPassword.trim() !== password.trim()) {
        return 'Password and Confirm Password are not matching'
    }
    return undefined
}

export const registerValidate = (value) => {
    const registerErrors = {}
    registerErrors.name = checkUserNameValidation(value.name)
    registerErrors.email = checkEmailValidation(value.email)
    registerErrors.password = checkPasswordValidation(value.password)
    registerErrors.password_confirmation = checkPasswordConfirm(value.password_confirmation,
        value.password)
    return registerErrors
}

export const checkPassCodeValidation = (val) => {
    if(isEmpty(val) || isSpaceOnly(val)) {
        return 'Please insert verification Code'
    } 
    return undefined
}
export const emailVerificationValidate = (value) => {
    const emailVerificationErrors = {}
    emailVerificationErrors.passcode = checkPassCodeValidation(value.passcode)
    emailVerificationErrors.email = checkEmailValidation(value.email)
    return emailVerificationErrors
}

export const forgotEmailValidate = (value) => {
    const forgotEmailVerificationErrors = {}
    forgotEmailVerificationErrors.email = checkEmailValidation(value.email)
    return forgotEmailVerificationErrors
}

export const forgotPasswordValidate = (value) => {
    const forgotPasswordErrors = {}
    forgotPasswordErrors.email = checkEmailValidation(value.email)
    forgotPasswordErrors.password = checkPasswordValidation(value.password)
    forgotPasswordErrors.password_confirmation = checkPasswordConfirm(value.password_confirmation,
        value.password)
        forgotPasswordErrors.token = checkPassCodeValidation(value.token)
    return forgotPasswordErrors
}