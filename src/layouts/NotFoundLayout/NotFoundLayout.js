import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import './NotFoundLayout.scss'

export const NotFoundLayout = ({ children }) => (
  <div className=''>
        <div className=''>
            {children}
        </div>
    </div>
)

NotFoundLayout.propTypes = {
  children: PropTypes.node,
}

export default NotFoundLayout
