import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(-90deg, #7159c1, #ab59c1);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

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

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
    }

    button {
<<<<<<< HEAD
      margin: 5px 0;
      background: #3b9eff;
      border: 0;
      height: 44px;
      border-radius: 4px;
      line-height: 24px;
      font-size: 16px;
      font-weight: bold;
      color: #fff;

=======
>>>>>>> 03b8c7681381aa6c919dd1b7e706ce71964da3a3
      &:hover {
        background: ${darken(0.03, '#3b9eff')};
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
`;
