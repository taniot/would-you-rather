import React from 'react'
import { truncate } from '../../utils/helpers'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Button } from 'antd'
import PropTypes from 'prop-types'

import {
  QuestionMainContainer,
  QuestionByContainer,
  QuestionContainer,
  QuestionUserAvatar,
  QuestionText,
  QuestionOption,
} from './question.styles'

import { RightSquareOutlined } from '@ant-design/icons'

const QuestionPreview = ({ question, questionBy, history }) => {
  const { optionOne, id } = question

  return (
    <QuestionMainContainer>
      <QuestionByContainer>{questionBy.name} asks:</QuestionByContainer>
      <QuestionContainer>
        <QuestionUserAvatar>
          <img src={questionBy.avatarURL} alt={question.name} />
        </QuestionUserAvatar>
        <QuestionText>
          <p className='title'> Would you rather...</p>
          <QuestionOption>
            <RightSquareOutlined />
            {truncate(optionOne.text, 15)}
          </QuestionOption>
          <QuestionOption>
            <RightSquareOutlined /> ...
          </QuestionOption>
          <Button
            type='primary'
            onClick={() => history.push(`/questions/${id}`)}
          >
            View Question
          </Button>
        </QuestionText>
      </QuestionContainer>
    </QuestionMainContainer>
  )
}

const mapStatetoProps = ({ questions, users, authedUser }, { id }) => {
  const user = users[authedUser]
  const question = questions[id]
  const questionBy = users[question.author]

  return {
    user,
    question: questions[id],
    questionBy,
  }
}

QuestionPreview.propTypes = {
  id: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  question: PropTypes.object.isRequired,
  questionBy: PropTypes.object.isRequired,
}

export default withRouter(connect(mapStatetoProps)(QuestionPreview))
