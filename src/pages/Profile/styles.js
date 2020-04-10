import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 10px 0 20px;
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
    }

    button {
      margin: 5px 0;
      background: #ff5555;
      border: 0;
      height: 44px;
      border-radius: 4px;
      line-height: 24px;
      font-size: 16px;
      font-weight: bold;
      color: #fff;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.05, '#ff5555')};
      }

      &:focus {
        border: 0;
      }
    }

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }

  > button {
    display: block;
    width: 100%;
    margin: 5px 0;
    background: #3b9eff;
    border: 0;
    height: 44px;
    border-radius: 4px;
    line-height: 24px;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.05, '#3b9eff')};
    }
  }
`;
