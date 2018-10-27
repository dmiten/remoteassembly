import { CALC, CALC_RESPONSE, CALC_RESET } from '../../redux/actionTypes'

const initialState = {
  operandA: '',
  operandB: '',
  operation: '',
  result: ''
}

export const calc = ({ operandA, operandB, operation }) => ({
  type: CALC,
  payload: { operandA, operandB, operation }
})

export const calcReset = () => ({ type: CALC_RESET })

const calcReducers = {
  [CALC]: (state, payload) => ({
    ...state,
    ...payload
  }),
  [CALC_RESPONSE]: (state, payload) => ({
    ...state,
    ...payload
  }),
  [CALC_RESET]: () => initialState
}

export const calcRootReducer = (state = initialState, action) => {
  let reducer = calcReducers[action.type]
  return reducer ? reducer(state, action.payload) : state
}
