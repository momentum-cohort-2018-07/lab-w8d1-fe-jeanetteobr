import React, { Component } from 'react'

import textOptions from './textOptions'
import TextInput from './TextInput'
import ShrinkText from './ShrinkText'

class App extends Component {
  constructor () {
    super()
    this.state = {
      text: '',
      options: []
    }
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
  render () {
    return (
      <div className='App container'>
        <h1>TweetShrink</h1>
        <div className='row'>
          <div className='col'>
            {/* TextEntry */}
            <TextInput />
            {/* end TextEntry */}
          </div>
          <div className='col'>
            {/* ShrunkText */}
            <ShrinkText />
            {/* end ShrunkText */}
          </div>
        </div>
        <div className='row options'>
          <div className='col-12'>
            <h4>Options</h4>
          </div>
          {/* TextOptions */}
          {textOptions.map((option, idx) => (
            <div key={idx} className='col-6'>
              {/* TextOption */}
              <label htmlFor={option.id}>
                <input type='checkbox' id={option.id} onChange={this.setOption(option.id)} /> {' ' + option.label}
              </label>
              {/* end TextOption */}
            </div>
          ))}
          {/* end TextOptions */}
        </div>
      </div>
    )
  }
}

export default App
