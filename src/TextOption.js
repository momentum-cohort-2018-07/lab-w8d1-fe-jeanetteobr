import React, { Component } from 'react'

class TextOption extends Component {
  setOption (option) {
    return (event) => {
      const value = event.target.checked
      console.log(value)
      const optionSet = new Set(this.state.options)
      if (value) {
        optionSet.add(option)
      } else {
        optionSet.delete(option)
      }
      this.setState({
        options: [...optionSet]
      })
    }
  }
  render () {
    return (
      <div>
        <label htmlFor={option.id}>
          <input type='checkbox' id={option.id} onChange={this.setOption(option.id)} /> {' ' + option.label}
        </label>
      </div>
    )
  }
}
export default TextOption
