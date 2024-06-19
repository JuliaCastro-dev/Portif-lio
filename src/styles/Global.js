import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 65.5%;
  }

  body {
    background-color: ${props => props.theme.COLORS.BACKGROUND_900};
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  body, input, h1, text-area, button {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    color: ${props => props.theme.COLORS.TEXT_500}
  }
`;