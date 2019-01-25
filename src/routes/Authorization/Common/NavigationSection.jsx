import React from 'react'
import PropTypes from 'prop-types'

import { LoginBGDiv,
    LoginAccountContentDiv,
    LoginAccountContentDivH2,
    LoginAccountContentP,
    LoginAccountContentDivAnchor } from './ReactStyled'


const NavigationSection = ({ sectionObject }) => {
    const sectionH2Text = sectionObject.sectionH2Text
    const sectionPText = sectionObject.sectionPText
    const sectionAnchorText = sectionObject.sectionAnchorText
    const sectionAnchorPath = sectionObject.sectionAnchorPath
    return (
        <LoginBGDiv>
            <LoginAccountContentDiv>
                <LoginAccountContentDivH2>{sectionH2Text}</LoginAccountContentDivH2>
            <LoginAccountContentP>{sectionPText}</LoginAccountContentP>
                <LoginAccountContentDivAnchor to={{ pathname: `${sectionAnchorPath}` }} >
                    {sectionAnchorText}</LoginAccountContentDivAnchor> 
            </LoginAccountContentDiv>
        </LoginBGDiv>)
}

NavigationSection.propTypes = {
    sectionObject:  PropTypes.oneOfType([
        PropTypes.object
      ]),
}

export default NavigationSection
