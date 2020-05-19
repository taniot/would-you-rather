import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import QuestionPreview from '../question/questionPreview.component'
import QuestionAnswered from '../question/questionAnswered.component'
import QuestionUnAnswered from '../question/questionUnAnswered.component'

const QuestionSwitch = ({ id, isAnswered, list, question }) => {
  if (!question) {
    return <Redirect to='/404' />
  }

  switch (true) {
    case list === true:
      return <QuestionPreview id={id} />

    case isAnswered === true:
      return <QuestionAnswered id={id} />
    case isAnswered === false:
      return <QuestionUnAnswered id={id} />

    default:
      return <QuestionUnAnswered id={id} />
  }
}

const mapStatetoProps = ({ questions, users, authedUser }, { id }) => {
  const user = users[authedUser]
  const question = questions[id]
  const userAnswers = Object.keys(user.answers)

  let isAnswered = false
  if (question) {
    if (userAnswers.includes(question.id)) {
      isAnswered = true
    }
  }
  return {
    isAnswered,
    question,
  }
}

QuestionSwitch.propTypes = {
  id: PropTypes.string.isRequired,
  isAnswered: PropTypes.bool.isRequired,
  list: PropTypes.bool,
  question: PropTypes.object,
}

export default connect(mapStatetoProps)(QuestionSwitch)
