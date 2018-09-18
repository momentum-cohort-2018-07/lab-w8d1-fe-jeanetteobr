import React, { Component } from 'react'

class TextInput extends Component {
  constructor (props) {
    super()
    this.state = {
      text: ''
    }
  }

  updateText (event) {
    this.setState({ text: event.target.value })
  }

  render () {
    const { text } = this.state
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
export default TextInput
