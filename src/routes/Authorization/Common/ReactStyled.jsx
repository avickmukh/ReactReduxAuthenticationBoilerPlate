import styled from 'styled-components';
import { Field } from 'redux-form';
import loginSectionImage from '../../../images/Wallpaper-Wet-Pool-Swimming-Green-Blue-3098949.jpg'
import WhiteLogo from '../../../images/logo-white.png'

import { Link } from 'react-router-dom'

export const LoginBGDiv = styled.div`
    display: -ms-flexbox;
    display: -webkit-box;
    display: flex;
    min-height: 100%;
    padding: 60px 30px;
    color: #fff;
    background-color: #acacac;
    -ms-flex-pack: center;
    -webkit-box-pack: center;
    justify-content: center;
    -ms-flex-align: end;
    -webkit-box-align: end;
    align-items: center;
    text-align: center;
    background: url(${loginSectionImage});
    background-size: cover;
    -ms-flex-pack: start;
    -webkit-box-pack: start;
    justify-content: flex-start;
    text-align: inherit;
`;

export const LoginAccountContentDiv = styled.div`
    max-width: 280px;
`;

export const LoginAccountContentDivH2 = styled.h2`
    font-size: 2rem;
    margin-bottom: 7px;
    font-weight: 300;
    text-transform: uppercase;
    color: inherit;
    font-family:inherit;
`;

export const LoginAccountContentP = styled.p`
    margin-bottom: 15px;
`;
export const AuthenticationFormField = styled.input`
    color: #fff !important;
    background-color: #494f50 !important;
    border-color: #494f50 !important;
    border-top-left-radius: 0 !important;
    border-bottom-left-radius: 0 !important;
    &:focus{
        outline: none !important;
    }
`;

export const LoginAccountContentDivAnchor = styled(Link)`
    background: #237faa;
    color: #fff;
    border-radius: 4px;
    padding: 8px 20px;
    border-width: 0;
    font-size: 14px;
    line-height: 24px;
    text-transform: uppercase;
    -webkit-transition-property: color,border-color,background-color;
    transition-property: color,border-color,background-color;
    -webkit-transition-duration: .35s;
    transition-duration: .35s;
    -webkit-transition-timing-function: ease-in-out;
    transition-timing-function: ease-in-out;
    cursor: pointer;
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    &:hover, &:focus{
        background: #2e9cd0;
        color: #fff;
    }
`;

export const AccountFormOuterDiv = styled.div`
    display: -ms-flexbox;
    display: -webkit-box;
    display: flex;
    min-height: 100%;
    padding: 35px 25px;
    color: #ccc;
    background-color: #1b2223;
    -ms-flex-align: center;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    -ms-flex-pack: center;
`;

export const AccountFormDiv = styled.div`
    width: 100%;
    max-width: 300px;
`;

export const AccountFormLogo = styled.div`
    margin-bottom: 10px;
    text-align: center;
`;

export const AccountTitle = styled.label`
    margin-bottom: 33px;
    color: #2bb3c0;
    font-size: 18px;
    line-height: 28px;
    text-align: center;
    display: block;
`;

export const AccountInputGroupPrependDiv = styled.div`
margin-right: 0;
padding: 0 20px;
color: #b3b5b5;
background-color: #494f50;
border-right: 1px solid #757575;
border-radius: .25rem 0 0 .25rem;
-ms-flex-align: center;
-webkit-box-align: center;
-ms-grid-row-align: center;
align-items: center;
display: flex;
`;

export const AccountFooterDiv = styled.div`
margin-top: 51px;
color: #999;
text-align: center;
font-size: 14px;
line-height: 18px;
`;

export const AccountActionsDiv = styled.div`
display: -ms-flexbox;
display: -webkit-box;
display: flex;
margin-top: 30px;
-ms-flex-align: center;
-webkit-box-align: center;
align-items: center;
`;

export const AccountFormGroup = styled.div`
margin-bottom: 15px;
`;

export const AccountFormControl = styled.input`
color: #fff !important;
background-color: #494f50 !important;
border-color: #494f50 !important;
border-top-left-radius: 0 !important;
border-bottom-left-radius: 0 !important;
&:focus{
    outline: none !important;
}
`;

export const AccountActionsButtonLink =  styled(Link)`
color: #ccc;
&:focus, &:hover{
    text-decoration: none;
    color: var(--main-blue-color);
}
`;

export const AccountActionsButton = styled.button`
    margin-left: auto !important;
`;

export const TokenDiv = styled.div`
    text-align: center;
`;
