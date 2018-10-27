import log from '../../utils/log'

const checkParams = (operandA, operandB, operation) => {
  if (!operandA || !operandB || !operation) {
    return ({
      action: 'SNACK',
      data: { message: 'Each parameter is important' }
    })
  }

  const operandANumb = Number(operandA)
  const operandBNumb = Number(operandB)

  if (Number.isNaN(operandANumb) || Number.isNaN(operandBNumb)) {
    return ({
      action: 'SNACK',
      data: { message: 'Each operand must be a number' }
    })
  }

  if (!['+', '-', '*', '/'].includes(operation)) {
    return ({
      action: 'SNACK',
      data: { message: 'Unknown operation' }
    })
  }

  return { operandANumb, operandBNumb }
}

export default ({ payload = {}, emitAction, db, sessionData }) => {
  const { operandA, operandB, operation } = payload

  let { action, data, operandANumb, operandBNumb } = checkParams(operandA, operandB, operation);

  if (operandANumb && operandBNumb) {
    try {
      const result = eval(`${operandANumb}${operation}${operandBNumb}`)

      action = 'CALC_RESPONSE'
      data = { result: Number.isFinite(result) ? result : 'Infinity' }
    } catch (err) {
      action = 'SNACK'
      data = { message: err.message }
    }
  }

  emitAction(action, data)

  if (action === 'SNACK') {
    log.err(`CALC, ${data.message}`)
  }

  emitAction('SPINNER', { Calculator: false })
}
