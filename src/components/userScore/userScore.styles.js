import styled from 'styled-components'

export const UserMainContainer = styled.div`
  border: 1px solid #efefef;
  margin-bottom: 20px;
  width: 500px;
  margin: 0 auto;
  margin-bottom: 20px;
  display: flex;
`

export const UserAvatarContainer = styled.div`
  padding: 20px;
  img {
    width: 100px;
    border-radius: 20px;
    border-bottom-left-radius: 0;
  }
`

export const UserInfoContainer = styled.div`
  padding: 20px;
  flex-grow: 2;
`

export const UserScoreContainer = styled.div`
  padding: 20px;
  flex-grow: 1;
`
export const UserName = styled.p`
  font-family: 'PT Sans', sans-serif;
  font-weight: bold;
  font-size:20px;
`

export const UserAnsweredQuestions = styled.p`

span {
    font-weight: bold;
}

`
export const UserCreatedQuestions = styled.p`

span {
    font-weight: bold;
}

`
export const UserScoreTable = styled.div`

border: 1px dotted #efefef;

.title {
    background-color: #efefef;
    border-bottom: 1px dotted #efefef;
    padding: 5px;
    text-align: center;
}

.score {
    text-align: center;
    vertical-align: center;
    background: rgb(20, 117, 77);
    margin: 0;
    border-radius: 50%;
    margin: 20px;
    color: #fff;
    font-family: 'PT Sans', sans-serif;
    font-size: 20px;
    padding: 10px;
}

`
