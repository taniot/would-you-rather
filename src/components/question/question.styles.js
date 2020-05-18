import styled from 'styled-components'

export const QuestionMainContainer = styled.div`
  border: 1px solid #efefef;
  margin-bottom: 20px;
  width: 500px;
  margin: 0 auto;
  margin-bottom: 20px;
`

export const QuestionByContainer = styled.div`
  border-bottom: 1px dotted #efefef;
  padding: 10px 20px;
  font-weight: bold;
`

export const QuestionContainer = styled.div`
  display: inline-flex;
  width: 100%;
`

export const QuestionUserAvatar = styled.div`
  border-right: 1px dotted #efefef;
  padding: 20px;

  img {
    width: 100px;
    border-radius: 20px;
    border-bottom-left-radius: 0;
  }
`
export const QuestionText = styled.div`
  padding: 20px;
  width: 100%;
  color: black;
  .title {
    font-style: italic;
  }

  .ant-badge {
    width: 100%;
  }
`

export const QuestionOption = styled.div`
  position: relative;
  border: 1px dotted #efefef;
  padding: 5px 15px;
  margin-bottom: ${(props) => props.marginBottom || '5px'};
  background-color: ${(props) => props.bgColor || '#ededed'};

  span {
    margin-right: 5px;
  }

  .ant-progress-outer {
    width: 90%;
  }

  .ant-progress-text {
    font-size: 12px;
  }

  .total-votes {
    font-size: 11px;
    padding: 10px 0;
    margin:0;
  }


`

export const AnswerBadge = styled.span`
  background-color: green;
  position: absolute;
  right: -12px;
  top: -10px;
  color: white;
  font-size: 10px;
  padding: 5px;
  display: ${(props) => (props.displayBadge === true ? 'block' : 'none')};
`
