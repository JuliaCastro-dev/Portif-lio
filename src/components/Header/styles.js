import styled from 'styled-components';
import {defaultTheme} from "../../themes/DefaultTheme"
export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  min-width:80vw;
  min-height:20vh;
  position: relative;
  background-color: ${defaultTheme.COLORS.GREEN};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 5px 5px 0px 0px;
  margin-top:10px;
   `;

export const Box = styled.div`
display:flex;
flex-direction:column;
justify-content: space-between;
align-items:left;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
`;
export const SubTitle = styled.h1`
  font-size: 1.4rem;
  font-weight: bold;
  margin-top: 10px;
`;

export const Nav = styled.nav`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin-right: 1rem;
    cursor:pointer;
    display: flex;
    flex-direction:row;
    justify-content: space-between;
    padding:1rem;
    align-items:center;
  }

  a {
    text-decoration: none;
    cursor:pointer;
    color: #333;
    font-size:1.3rem;
    padding-left:10px;
  }
`;