import { getInitialData, saveQuestion, saveQuestionAnswer } from '../utils/api'
import { getUsers, addUserQuestion, addUserAnswer } from './users'
import { getQuestions, addQuestion, addQuestionAnswer } from './questions'
import { showLoading, hideLoading } from 'react-redux-loading-bar'


export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData().then(({ users, questions }) => {
      dispatch(getUsers(users))
      dispatch(getQuestions(questions))
      dispatch(hideLoading())
    })
  }
}

export function handleAddQuestion(question) {
  return (dispatch, getState) => {
    dispatch(showLoading())
    const { authedUser } = getState()

    const createQuestion = {
      ...question,
      author: authedUser,
    }

    return saveQuestion(createQuestion).then((result) => {
      dispatch(addQuestion(result))
      dispatch(addUserQuestion(authedUser, result.id))
      dispatch(hideLoading())
    })
  }
}

export function handleAnswer(info) {
  
  return (dispatch) => {
    dispatch(showLoading())
    return saveQuestionAnswer(info).then(() => {
      dispatch(addQuestionAnswer(info)) //questionid, option, userid
      dispatch(addUserAnswer(info)) //questionid, option, userid
      dispatch(hideLoading())
    })
  }
}
