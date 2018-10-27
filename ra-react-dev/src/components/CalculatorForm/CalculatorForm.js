import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  Card,
  CardActions,
  CardHeader,
  TextField,
  CardContent
} from 'material-ui'
import Button from 'material-ui/Button'
import withStyles from 'material-ui/styles/withStyles'
import Grid from 'material-ui/Grid'

const styles = theme => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  CardActions: {
    justifyContent: 'center'
  }
})

class CalculatorForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      operandA: '',
      operandB: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.onKeyPress = this.onKeyPress.bind(this)
    this.calc = this.calc.bind(this)
    this.calcReset = this.calcReset.bind(this)
  }

  onKeyPress({ nativeEvent: { keyCode } }) {
    if (keyCode === 13) {
      this.calc()
    }
  }

  handleChange(name) {
    return ({ target: { value } }) => {
      this.setState({
        [name]: value
      })
    }
  }

  calc(operation) {
    return () => {
      const { operandA, operandB} = this.state

      if (!operandA || !operandB) {
        alert('Both operands must be present')
        return false
      }

      this.props.calc({ operandA, operandB, operation })
    }
  }

  calcReset() {
    this.props.calcReset()

    this.setState({
      operandA: '',
      operandB: ''
    })
  }

  render() {
    const { classes, calculatorState } = this.props
    const { operandA, operandB } = this.state
    return (
      <form className={classes.container} noValidate autoComplete='off'>
        <Card className={classes.cardStyle}>
          <CardHeader title='Calculator' />
          <CardContent>
            <Grid container spacing={16}>
              <Grid item xs={12}>
                <TextField
                  label='operandA'
                  className={classes.textField}
                  type='number'
                  margin='normal'
                  value={operandA}
                  fullWidth
                  onChange={this.handleChange('operandA')}
                  onKeyPress={this.onKeyPress}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label='operandB'
                  className={classes.textField}
                  type='number'
                  margin='normal'
                  value={operandB}
                  fullWidth
                  onChange={this.handleChange('operandB')}
                  onKeyPress={this.onKeyPress}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label='result'
                  className={classes.textField}
                  margin='normal'
                  value={calculatorState.result}
                  fullWidth
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
            </Grid>
          </CardContent>
          <CardActions className={classes.CardActions}>
            <Button onClick={this.calc('+')}>+</Button>
            <Button onClick={this.calc('-')}>-</Button>
            <Button onClick={this.calc('*')}>*</Button>
            <Button onClick={this.calc('/')}>/</Button>
            <Button onClick={this.calcReset}>C</Button>
          </CardActions>
        </Card>
      </form>
    )
  }
}

const { func, object } = PropTypes

CalculatorForm.propTypes = {
  calc: func.isRequired,
  calcReset: func.isRequired,
  calculatorState: object.isRequired,
  classes: object.isRequired
}

export default withStyles(styles)(CalculatorForm)
