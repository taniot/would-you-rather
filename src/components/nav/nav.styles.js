import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 20px;
  min-height: 100px;
`
export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  font-family: 'Indie Flower', cursive;
  font-size: 30px;
  font-weight: bold;

  a {
    text-decoration: none;
    padding: 20px 0;
    display: flex;
    align-items: center;
    color: rgb(20, 117, 77);
  }

  span {
    align-items: center;
    display: flex;
    margin-right: 10px;
    img {
      width: 50px;
      border-radius: 20px;
      border-bottom-left-radius: 0;
      margin-right: 15px;
    }
  }
`

export const MenuContainer = styled.ul`
  justify-content: center;
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  border-top: 1px dotted #ccc;
  border-bottom: 1px dotted #ccc;
  background-color: #efefef;

  li {
    padding: 10px;
  }

  a {
    font-family: 'PT Sans', sans-serif;
    font-weight: 500;
    text-decoration: none;
    color: rgb(20, 117, 77);
    text-transform: uppercase;
  }
`

export const UserContainer = styled.div`
  background-color: blue;
`
