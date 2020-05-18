import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../../actions/authedUser'
import { Redirect } from 'react-router-dom'
import { Button, Select } from 'antd'
import { Container } from '../pages.styles'
import { LoginContainer } from './login.styles'

class Login extends Component {
  state = {
    user: '',
    buttonDisabled: true,
    redirectToReferrer: false,
  }

  handleChange = (props) => {
    this.setState({
      user: props,
      buttonDisabled: props !== '' ? false : true,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch } = this.props

    dispatch(setAuthedUser(this.state.user))

    this.setState({
      redirectToReferrer: true,
    })
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state
    const { options } = this.props
    const { buttonDisabled } = this.state
    const { Option } = Select

    console.log(this.props.location)

    if (redirectToReferrer) {
      return <Redirect to={from} />
    }
    return (
      <Container>
        <LoginContainer>
          <label htmlFor='select-user'>Choose your player</label>
          <Select
            id='select-user'
            showSearch
            style={{ width: 200 }}
            placeholder='Players list'
            optionFilterProp='children'
            onChange={this.handleChange}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {options.map((option) => (
              <Option key={option.value} value={option.value}>
                {option.label}
              </Option>
            ))}
          </Select>
          <Button
            type='primary'
            disabled={buttonDisabled}
            onClick={this.handleSubmit}
          >
            Sign in
          </Button>
        </LoginContainer>
      </Container>
    )
  }
}

function mapStateToProps({ authedUser, users }) {
  const usersList = Object.values(users)

  let options = []

  usersList.forEach((user) => {
    options.push({
      value: user.id,
      label: user.name,
    })
  })

  return {
    options,
    users,
    authedUser,
  }
}

export default connect(mapStateToProps)(Login)
