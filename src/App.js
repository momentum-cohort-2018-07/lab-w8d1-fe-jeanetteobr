import React, { Component } from 'react'

import textOptions from './textOptions'
import TextInput from './TextInput'
import ShrinkText from './ShrinkText'
import TxtOptions from './TxtOptions'

class App extends Component {
  constructor () {
    super()
    this.state = {
      text: '',
      options: []
    }
    this.setOption = this.setOption.bind(this)
    this.updateText = this.updateText.bind(this)
  }

  updateText (event) {
    this.setState({ text: event.target.value })
  }

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
    return (
      <div className='App container'>
        <h1>TweetShrink</h1>
        <div className='row'>
          <div className='col'>
            <TextInput text={this.state.text} updateText={this.updateText} />
          </div>
          <div className='col'>
            <ShrinkText shrunkText={this.shrinkText()} />
          </div>
          <TxtOptions textOptions={textOptions} setOption={this.setOption} />
        </div>
      </div>
    )
  }
}

export default App
