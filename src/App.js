import React, { Component } from 'react'
import { handleInitialData } from './actions/shared'
import { connect } from 'react-redux'

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(handleInitialData())
  }
  render() {
    return <div className='App'>Would you rather</div>
  }
}

export default connect()(App)
