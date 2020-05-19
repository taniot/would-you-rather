import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../../actions/shared'

import { Container } from '../pages.styles'
import { Divider, Input, Button } from 'antd'
import {
  QuestionMainContainer,
  QuestionByContainer,
  QuestionContainer,
  QuestionText,
} from '../../components/question/question.styles'

class AddQuestion extends Component {
  state = {
    optionOne: '',
    optionTwo: '',
    buttonDisabled: true,
  }

  handleChange = (e) => {
    e.preventDefault()
    this.setState({ [e.target.name]: e.target.value }, () =>
      this.state.optionOne !== '' && this.state.optionTwo !== ''
        ? this.setState({ buttonDisabled: false })
        : this.setState({ buttonDisabled: true })
    )
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch, history } = this.props
    const { optionOne, optionTwo } = this.state

    const question = {
      optionOneText: optionOne,
      optionTwoText: optionTwo,
    }

    dispatch(handleAddQuestion(question)).then(() => history.push('/'))
  }

  render() {
    const { buttonDisabled } = this.state
    return (
      <Container>
        <QuestionMainContainer>
          <QuestionByContainer>Create a new question:</QuestionByContainer>
          <QuestionContainer>
            <QuestionText>
              <p className='title'>Would you rather:</p>

              <Input
                name='optionOne'
                placeholder='Enter option one text here'
                allowClear
                onChange={this.handleChange}
              />

              <Divider>or</Divider>

              <Input
                style={{ marginBottom: 20 }}
                name='optionTwo'
                placeholder='Enter option two text here'
                allowClear
                onChange={this.handleChange}
              />

              <Button
                type='primary'
                onClick={this.handleSubmit}
                disabled={buttonDisabled}
              >
                Add Question
              </Button>
            </QuestionText>
          </QuestionContainer>
        </QuestionMainContainer>
      </Container>
    )
  }
}

export default connect()(AddQuestion)
