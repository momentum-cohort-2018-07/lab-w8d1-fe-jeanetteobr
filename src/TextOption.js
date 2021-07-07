import React, { Component } from 'react'

class TextOption extends Component {
  render () {
    return (
      <div>
        <label htmlFor={this.props.option.id}>
          <input type='checkbox' id={this.props.option.id} onChange={this.props.setOption(this.props.option.id)} /> {' ' + this.props.option.label}
        </label>
      </div>
    )
  }
}
export default TextOption
