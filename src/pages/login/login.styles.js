import styled from 'styled-components'


export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #efefef;
  flex-direction: column;
  text-align: center;
  width: 300px;
  padding: 20px;
  border-radius: 20px;
  border-bottom-left-radius: 0;
  margin:0 auto;
  label {
    font-weight: bold;
    margin-bottom: 20px;
    font-family: 'PT Sans', sans-serif;
    font-size: 15px;
  }

  .ant-select {
    margin: 0 auto;
    margin-bottom: 20px;

    * {
      cursor: pointer !important;
    }
  }

  button {
    width: 100px;
    margin: 0 auto;
  }
`