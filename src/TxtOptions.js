import React, { Component } from 'react'

import TextOption from './TextOption'

class TxtOptions extends Component {
  render () {
    const {setOption, textOptions} = this.props
    return (
      <div className='row options'>
        <div className='col-12'>
          <h4>Options</h4>
        </div>
        <div>
          {textOptions.map((option, idx) => (
            <div key={idx} className='col-6'> <TextOption key={idx} option={option} setOption={setOption} /></div>
          ))}
        </div>
      </div>
    )
  }
}
export default TxtOptions
