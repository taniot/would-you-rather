import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  UserMainContainer,
  UserAvatarContainer,
  UserInfoContainer,
  UserScoreContainer,
  UserName,
  UserAnsweredQuestions,
  UserCreatedQuestions,
  UserScoreTable
} from './userScore.styles'



class UserScore extends Component {
  render() {
    const { name, questions, answers, score, avatarURL } = this.props

    return (
      <UserMainContainer>
        <UserAvatarContainer>
          <img src={avatarURL} alt={name} />
        </UserAvatarContainer>
        <UserInfoContainer>
          <UserName>{name}</UserName>
          <UserAnsweredQuestions>Answered questions: <span>{answers}</span></UserAnsweredQuestions>
          
          <UserCreatedQuestions>Created questions: <span>{questions}</span> </UserCreatedQuestions>
        </UserInfoContainer>

        <UserScoreContainer>
        
        <UserScoreTable><p className='title'>Score</p> <p className='score'>{score}</p></UserScoreTable>
        </UserScoreContainer>
      </UserMainContainer>
    )
  }
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

export default connect(mapStateToProps)(UserScore)
