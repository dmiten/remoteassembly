import { combineReducers } from 'redux'
import { fuelSavingsReducer } from '../modules/FuelSavingsPage'
import { dialogState } from '../modules/Dialog'
import { drawerState } from '../modules/Drawer'
import { routerReducer } from 'react-router-redux'
import { signInRootReducer } from '../modules/SignIn/SignIn.state'
import { snackRootReducer } from './snackReducer'
import { spinnerRootReducer } from './spinnerState'
import { sessionRootReducer } from './sessionState'
import { calcRootReducer } from '../modules/Calculator/Calculator.state'

const rootReducer = combineReducers({
  fuelSavings: fuelSavingsReducer,
  routing: routerReducer,
  signInState: signInRootReducer,
  dialogState: dialogState,
  drawerState: drawerState,
  spinner: spinnerRootReducer,
  snack: snackRootReducer,
  session: sessionRootReducer,
  calculatorState: calcRootReducer
})

export default rootReducer
