import React, { Component } from 'react'

import PropTypes from 'prop-types'

class TextInput extends Component {
  render () {
    const { text, updateText } = this.props
    return (
      <div>
        <textarea
          className='TextEntry-textbox'
          placeholder='What do you want to shrink?'
          onChange={updateText}
          value={text} />
        <div>
          {text && `${text.length} characters`}
        </div>
      </div>
    )
  }
}

TextInput.propTypes = {
  text: PropTypes.string
}
export default TextInput
