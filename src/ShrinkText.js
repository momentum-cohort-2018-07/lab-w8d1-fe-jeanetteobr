import React, { Component } from 'react'

import PropTypes from 'prop-types'

class ShrinkText extends Component {
  render () {
    return (
      <div>
        <div className='TextEntry-shrunk-text'>
          {this.props.shrunkText}
        </div>
        <div>
          {this.props.shrunkText && `${this.props.shrunkText.length} characters`}
        </div>
      </div>
    )
  }
}

ShrinkText.propTypes = {
  text: PropTypes.string,
  options: PropTypes.array
}
export default ShrinkText
