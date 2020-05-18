import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { unSetAuthedUser } from '../../actions/authedUser'

import { Popconfirm } from 'antd'

class Logout extends Component {
  logout = (e) => {
    e.preventDefault()
    const { history, dispatch } = this.props
    dispatch(unSetAuthedUser())
    history.push('/login')
  }

  render() {
    return (
      <Popconfirm
        title='Are you sure?'
        onConfirm={this.logout}
        okText='Yes'
        cancelText='No'
      >
        <a href='/'>Logout</a>
      </Popconfirm>
    )
  }
}

export default withRouter(connect()(Logout))
