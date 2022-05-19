import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`

  :root {
    --primaryBackground: #262D37;
    --secondaryBackground: #3C424B;
    --blue: #2BA7F3;
    --white: #fff;
    --gray: #9B9B9B;
    --blueGray: #515A66;
  }

  * {
    box-sizing: border-box;
    font-family: Montserrat, sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: var(--primaryBackground);

    //h1 {
    //  font-size: 2rem;
    //  font-weight: 600;
    //  color: var(--blue);
    //}

    p {
      color: var(--white);
    }
  }
`;
