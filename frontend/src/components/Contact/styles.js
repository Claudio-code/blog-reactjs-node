import styled from 'styled-components';
import { darken } from 'polished';
import Typography from '@material-ui/core/Typography';

export const Container = styled.div`
  background-color: #FFF;
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  margin: 05vh 40vh 05vh 40vh;
  border-radius: 3px;
  padding: 2%;
`;

export const Title = styled(Typography).attrs({
  component: 'h6', variant: 'h6'
})`
  font-weight: 700;
  color: #ffa000;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;

  label {
    align-self: baseline;
    font-weight: bold;
  }
`; 

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    textarea {
      background: #FFF;
      border-width: 1px;
      border-radius: 4px;
      padding: 2vh;
      color: #000;
      margin: 0 0 05vh;

      &::placeholder {
        color: #9e9e9e;
        font-weight: bold;
      }
    }

    input {
      background: #FFF;
      border-width: 1px;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #000;
      margin: 0 0 05vh;

      &::placeholder {
        color: #9e9e9e;
        font-weight: bold;
      }
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      cursor: pointer;
      background: #212121;
      font-weight: bold;
      color: #FFF;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2%;
      display: flex;
      justify-content: center;
      align-items: center;
      
      &:hover {
        background: ${darken(0.03, '#212121')};
      }

      svg {
        margin-right: 2vh;
      }
    }
  }
`;