import React, { Component } from 'react'

import PropTypes from 'prop-types'

class TextInput extends Component {
  updateText (event) {
    this.setState({ text: event.target.value })
  }

  render () {
    const { text } = this.props
    return (
      <div>
        <textarea
          className='TextEntry-textbox'
          placeholder='What do you want to shrink?'
          onChange={this.updateText}
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
