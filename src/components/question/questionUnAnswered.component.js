import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAnswer } from '../../actions/shared'
import { Button, Radio } from 'antd'
import PropTypes from 'prop-types'

import {
  QuestionMainContainer,
  QuestionByContainer,
  QuestionContainer,
  QuestionUserAvatar,
  QuestionText,
} from './question.styles'

class QuestionUnAnswered extends Component {
  state = {
    answer: '',
    buttonDisabled: true,
  }

  static propTypes = {
    id: PropTypes.string.isRequired,
    authedUser: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired,
    question: PropTypes.object.isRequired,
    questionBy: PropTypes.object.isRequired,
  }

  handleChange = (e) => {
    this.setState({
      answer: e.target.value,
      buttonDisabled: e.target.value !== '' ? false : true,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch, authedUser, question } = this.props
    const { answer } = this.state

    const info = {
      authedUser,
      qid: question.id,
      answer,
    }

    dispatch(handleAnswer(info))
  }

  render() {
    const { question, questionBy } = this.props
    const { optionOne, optionTwo } = question
    const { buttonDisabled } = this.state

    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    }

    const radioGroupStyle = {
      width: '100%',
      marginBottom: '20px',
    }

    return (
      <QuestionMainContainer>
        <QuestionByContainer>{questionBy.name} asks:</QuestionByContainer>
        <QuestionContainer>
          <QuestionUserAvatar>
            <img src={questionBy.avatarURL} alt={question.name} />
          </QuestionUserAvatar>
          <QuestionText>
            <p className='title'> Would you rather...</p>
            <Radio.Group onChange={this.handleChange} style={radioGroupStyle}>
              <Radio style={radioStyle} value='optionOne'>
                {optionOne.text}
              </Radio>
              <Radio style={radioStyle} value='optionTwo'>
                {optionTwo.text}
              </Radio>
            </Radio.Group>

            <Button
              type='primary'
              onClick={this.handleSubmit}
              disabled={buttonDisabled}
            >
              Vote
            </Button>
          </QuestionText>
        </QuestionContainer>
      </QuestionMainContainer>
    )
  }
}

const mapStatetoProps = ({ questions, users, authedUser }, { id }) => {
  const user = users[authedUser]
  const question = questions[id]
  const questionBy = users[question.author]

  return {
    authedUser,
    user,
    question: questions[id],
    questionBy,
  }
}

export default connect(mapStatetoProps)(QuestionUnAnswered)
