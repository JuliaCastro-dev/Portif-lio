import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 70.5%;
  }

  body {
    background-color: ${props => props.theme.COLORS.BEIGE};
    display: flex;
    flex-direction: column;
    align-items: center;
    width:80vw;
    left:10vw;
    position:fixed;

  }

  body, input, h1, text-area, button {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    color: ${props => props.theme.COLORS.WHITE}
  }
  a, p {
   font-weight: 600;
   font-family: "Roboto", sans-serif;
   color: ${props => props.theme.COLORS.TEXT_500}
  }
`;
