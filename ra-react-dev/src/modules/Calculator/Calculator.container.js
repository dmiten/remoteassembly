import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { push } from 'react-router-redux'

import CalculatorView from './Calculator.view'
import { calc, calcReset } from './Calculator.state'

export default connect(
  state => ({
    calculatorState: state.calculatorState
  }),
  dispatch => ({
    calc: bindActionCreators(calc, dispatch),
    calcReset: bindActionCreators(calcReset, dispatch)
  })
)(CalculatorView)
