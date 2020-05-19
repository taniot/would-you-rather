import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  UserMainContainer,
  UserAvatarContainer,
  UserInfoContainer,
  UserScoreContainer,
  UserName,
  UserAnsweredQuestions,
  UserCreatedQuestions,
  UserScoreTable,
} from './userScore.styles'

const UserScore = ({ name, questions, answers, score, avatarURL }) => {
  return (
    <UserMainContainer>
      <UserAvatarContainer>
        <img src={avatarURL} alt={name} />
      </UserAvatarContainer>
      <UserInfoContainer>
        <UserName>{name}</UserName>
        <UserAnsweredQuestions>
          Answered questions: <span>{answers}</span>
        </UserAnsweredQuestions>

        <UserCreatedQuestions>
          Created questions: <span>{questions}</span>{' '}
        </UserCreatedQuestions>
      </UserInfoContainer>

      <UserScoreContainer>
        <UserScoreTable>
          <p className='title'>Score</p> <p className='score'>{score}</p>
        </UserScoreTable>
      </UserScoreContainer>
    </UserMainContainer>
  )
}

const mapStateToProps = ({ users }, { id }) => {
  const user = users[id]

  return {
    name: user.name,
    avatarURL: user.avatarURL,
    questions: user.questions.length,
    answers: Object.keys(user.answers).length,
    score: user.questions.length + Object.keys(user.answers).length,
  }
}

UserScore.propTypes = {
  name: PropTypes.string.isRequired,
  questions: PropTypes.number.isRequired,
  answers: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  avatarURL: PropTypes.string.isRequired,
}

export default connect(mapStateToProps)(UserScore)
