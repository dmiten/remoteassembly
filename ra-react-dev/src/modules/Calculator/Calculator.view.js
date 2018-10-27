import React, { Component } from 'react'

import CalculatorForm from '../../components/CalculatorForm'
import Spinner from '../../components/Spinner'

export default class Calculator extends Component {
  render () {
    return (
      <div>
        <CalculatorForm {...this.props} />
        <Spinner target='Calculator' />
      </div>
    )
  }
}
