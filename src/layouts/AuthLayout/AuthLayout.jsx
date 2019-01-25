import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { NotificationContainer } from 'react-notifications';

import './AuthLayout.scss'

const LoginPage = styled.section`
    background: whitesmoke;
    background-size: cover;
    display: -ms-flexbox;
    display: -webkit-box;
    display: flex;
    min-height: 100vh;
    -ms-flex-align: center;
    -webkit-box-align: center;
    align-items: center;
    -ms-flex-pack: center;
    -webkit-box-pack: center;
    justify-content: center;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    padding: 60px 15px;
    background-attachment: fixed;
`;

export const AuthLayout = ({ children }) => {
    return(
    <LoginPage>
        <div className="container">
            {children}            
        </div>
        <NotificationContainer/>
    </LoginPage>
)
    }
AuthLayout.propTypes = {
  children: PropTypes.node,
}

export default AuthLayout
