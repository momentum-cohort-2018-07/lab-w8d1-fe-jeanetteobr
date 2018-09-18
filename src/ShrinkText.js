import React, { Component } from 'react'

import textOptions from './textOptions'
import PropTypes from './PropTypes'

class ShrinkText extends Component {
  shrinkText () {
    let { text, options } = this.props

    if (!text) {
      return ''
    }

    let opObj
    options.forEach(option => {
      opObj = textOptions.find(o => o.id === option)
      if (opObj) {
        text = opObj.fn(text)
      }
    })

    return text
  }
  render () {
    const shrunkText = this.shrinkText()
    return (
      <div>
        <div className='TextEntry-shrunk-text'>
          {shrunkText}
        </div>
        <div>
          {shrunkText && `${shrunkText.length} characters`}
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
