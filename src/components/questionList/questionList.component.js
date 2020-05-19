import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import QuestionSwitch from '../questionSwitch/questionSwitch.component'

const QuestionList = ({ list }) => {
  return (
    <Fragment>
      {list.map((question) => (
        <QuestionSwitch key={question} id={question} list={true} />
      ))}
    </Fragment>
  )
}

QuestionList.propTypes = {
  list: PropTypes.array.isRequired,
}

export default QuestionList
