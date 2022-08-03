import styled, { createGlobalStyle } from 'styled-components';
import bgImage from './assets/books.jpg';

interface ButtonProps {
  startButton?: boolean;
}

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    background-image: url(${bgImage});
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }

  * {
    box-sizing: border-box;
    font-family: 'Catamaran', sans-serif;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > p {
    color: #fff;
  }
`;

export const Score = styled.p`
  color: #fff;
  font-size: 2rem;
  margin: 0;
`;

export const Title = styled.h1`
  font-family: 'Fascinate Inline', sans-serif;
  font-size: 70px;
  font-weight: 400;
  text-align: center;
  margin: 20px;
  background-image: linear-gradient(180deg, #fff, #87f1ff);
  background-size: 100%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  filter: drop-shadow(2px 2px #0085a3);
`;

export const Button = styled.button<ButtonProps>`
  height: auto;
  max-width: ${({ startButton }) => startButton && '200px'};
  margin: 20px 0;
  padding: 10px 40px;
  background: linear-gradient(180deg, #ffffff, #ffcc91);
  border: 2px solid #d38558;
  border-radius: 10px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;
