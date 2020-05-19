import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Tabs } from 'antd'
import QuestionsList from '../../components/questionList/questionList.component'
import { Container } from '../pages.styles'
import styled from 'styled-components'
const { TabPane } = Tabs

const StyledTabs = styled(Tabs)`
  margin: 0 auto;
`

class DashBoard extends Component {
    render() {
      const { answered, unanswered } = this.props
  
      return (
        <Container>
          <StyledTabs defaultActiveKey='1' animated={false}>
            <TabPane tab={<span>UnAnswered</span>} key='1'>
              {unanswered.length ? (
                <QuestionsList list={unanswered} />
              ) : (
                <p>You've answered all questions.</p>
              )}
            </TabPane>
            <TabPane tab={<span>Answered</span>} key='2'>
              {answered.length ? (
                <QuestionsList list={answered} />
              ) : (
                <p>Start playing and answer questions!</p>
              )}
            </TabPane>
          </StyledTabs>
        </Container>
      )
    }
  }

function mapStateToProps({ authedUser, users, questions }) {
  const user = users[authedUser]

  const questionIds = Object.keys(questions).sort(
    (a, b) => questions[b].timestamp - questions[a].timestamp
  )

  const answered = []
  const unanswered = []
  if (user) {
    const userAnswers = Object.keys(user.answers)

    questionIds.forEach((element) => {
      if (userAnswers.includes(element)) {
        answered.push(element)
      } else {
        unanswered.push(element)
      }
    })
  }

  return {
    user,
    authedUser,
    answered,
    unanswered,
  }
}

export default connect(mapStateToProps)(DashBoard)
