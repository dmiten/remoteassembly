import { connect } from 'react-redux'
import NavigatorView from './NavigatorView'

export default connect(({navigatorState}) => ({
  navigatorState
}))(NavigatorView)
