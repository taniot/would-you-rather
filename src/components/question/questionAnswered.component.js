import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { financial } from '../../utils/helpers'
import {
  QuestionMainContainer,
  QuestionByContainer,
  QuestionContainer,
  QuestionUserAvatar,
  QuestionText,
  QuestionOption,
  AnswerBadge,
} from './question.styles'

import { RightSquareOutlined } from '@ant-design/icons'
import { Progress } from 'antd'

const QuestionAnswered = ({
  questionBy,
  question,
  percOne,
  percTwo,
  answer,
  totalVotes,
}) => {
  return (
    <QuestionMainContainer>
      <QuestionByContainer>{questionBy.name} asks:</QuestionByContainer>
      <QuestionContainer>
        <QuestionUserAvatar>
          <img src={questionBy.avatarURL} alt={question.name} />
        </QuestionUserAvatar>

        <QuestionText>
          <p className='title'>Would you rather...</p>

          <QuestionOption
            marginBottom='15px'
            bgColor={answer === 'optionOne' ? '#cff7cf' : ''}
          >
            <AnswerBadge displayBadge={answer === 'optionOne'}>
              Your vote
            </AnswerBadge>
            <RightSquareOutlined /> {question.optionOne.text}
            <Progress percent={financial(percOne)} status='active' />
            <p className='total-votes'>
              {question.optionOne.votes.length} out of {totalVotes} votes
            </p>
          </QuestionOption>

          <QuestionOption
            marginBottom='15px'
            bgColor={answer === 'optionTwo' ? '#cff7cf' : ''}
          >
            <AnswerBadge displayBadge={answer === 'optionTwo'}>
              Your vote
            </AnswerBadge>
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

const mapStatetoProps = ({ questions, users, authedUser }, { id }) => {
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
    question,
    answer,
    totalVotes,
    percOne,
    percTwo,
    questionBy,
  }
}

QuestionAnswered.propTypes = {
  id: PropTypes.string.isRequired,
  questionBy: PropTypes.object.isRequired,
  question: PropTypes.object.isRequired,
  answer: PropTypes.string.isRequired,
  totalVotes: PropTypes.number.isRequired,
  percOne: PropTypes.number.isRequired,
  percTwo: PropTypes.number.isRequired,
}

export default connect(mapStatetoProps)(QuestionAnswered)
