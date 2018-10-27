import { SPINNER, SIGN_IN, CALC } from './actionTypes'

const initialState = {
  SignIn: false,
  Calculator: false
}

export const showSpinner = payload => ({ SPINNER, payload })

const spinnerReducers = {
  [SPINNER]: (state, payload) => ({
    ...state,
    ...payload
  }),
  [SIGN_IN]: state => ({
    ...state,
    SignIn: true
  }),
  [CALC]: state => ({
    ...state,
    Calculator: true
  })
}

export const spinnerRootReducer = (state = initialState, action) => {
  let reducer = spinnerReducers[action.type]
  return reducer ? reducer(state, action.payload) : state
}
