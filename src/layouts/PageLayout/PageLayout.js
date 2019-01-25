import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import { NotificationContainer } from 'react-notifications';
import './PageLayout.scss'

export const PageLayout = ({ children }) => (
  <div className=''>
        <div className=''>
            {children}
        </div>
        <NotificationContainer/>
    </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
