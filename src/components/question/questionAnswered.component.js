import React, { Component } from 'react'
import { connect } from 'react-redux'
import { financial } from '../../utils/helpers'
import {
  QuestionMainContainer,
  QuestionByContainer,
  QuestionContainer,
  QuestionUserAvatar,
  QuestionText,
  QuestionOption,
  AnswerBadge
} from './question.styles'

import { RightSquareOutlined } from '@ant-design/icons'

import { Progress } from 'antd'

class QuestionAnswered extends Component {
  render() {
    const { questionBy, question, percOne, percTwo, answer, totalVotes } = this.props
    return (
      <QuestionMainContainer>
        <QuestionByContainer>{questionBy.name} asks:</QuestionByContainer>
        <QuestionContainer>
          <QuestionUserAvatar>
            <img src={questionBy.avatarURL} alt={question.name} />
          </QuestionUserAvatar>

          <QuestionText>
            <p className='title'>Would you rather...</p>

            <QuestionOption marginBottom='15px' bgColor={answer === 'optionOne' ? '#cff7cf' : ''}>
            <AnswerBadge displayBadge={answer === 'optionOne'}>Your vote</AnswerBadge>
              <RightSquareOutlined /> {question.optionOne.text}
              <Progress percent={financial(percOne)} status='active' />
              <p className='total-votes'>
              {question.optionOne.votes.length} out of {totalVotes} votes
            </p>
            </QuestionOption>

            <QuestionOption marginBottom='15px' bgColor={answer === 'optionTwo' ? '#cff7cf' : ''}>
            <AnswerBadge displayBadge={answer === 'optionTwo'}>Your vote</AnswerBadge>
              <RightSquareOutlined />
              {question.optionTwo.text}
              <Progress percent={financial(percTwo)} status='active' />
              <p className='total-votes'>
              {question.optionTwo.votes.length} out of {totalVotes} votes
            </p>
            </QuestionOption>
          </QuestionText>
        </QuestionContainer>
      </QuestionMainContainer>
    )
  }
}

const mapStatetoProps = ({ questions, users, authedUser }, { id }) => {
  const user = users[authedUser]
  const question = questions[id]
  const answers = users[authedUser].answers
  let answer
  if (answers.hasOwnProperty(question.id)) {
    answer = answers[question.id]
  }
  const questionBy = users[question.author]
  const totalVotes =
    question.optionOne.votes.length + question.optionTwo.votes.length
  const percOne = (question.optionOne.votes.length / totalVotes) * 100
  const percTwo = (question.optionTwo.votes.length / totalVotes) * 100

  return {
    user,
    question,
    answer,
    totalVotes,
    percOne,
    percTwo,
    questionBy,
  }
}

export default connect(mapStatetoProps)(QuestionAnswered)
