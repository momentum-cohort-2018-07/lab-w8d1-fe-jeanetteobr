import React, { Component } from 'react'

import textOptions from './textOptions'
import TextOption from './TextOption'

class TxtOptions extends Component {
  render () {
    return (
      <div>
        {textOptions.map((option, idx) => (
          <div key={idx} className='col-6'> <TextOption /></div>
        ))}
      </div>
    )
  }
}
export default TxtOptions
