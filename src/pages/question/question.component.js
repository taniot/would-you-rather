import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import QuestionSwitch from '../../components/questionSwitch/questionSwitch.component'
import { Container } from '../pages.styles'

const QuestionDetail = ({ match }) => {
  const { id } = match.params
  return (
    <Container>
      <QuestionSwitch id={id} />
    </Container>
  )
}

QuestionDetail.propTypes = {
  match: PropTypes.object.isRequired,
}

export default connect()(QuestionDetail)
