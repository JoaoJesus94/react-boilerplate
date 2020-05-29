import React from 'react'
import PropTypes from 'prop-types'

export const TestLink = ({ text }) => <div>{text}</div>

TestLink.propTypes = {
	text: PropTypes.string,
}

TestLink.defaultProps = {
	text: 'This is default text from defaultProps',
}
