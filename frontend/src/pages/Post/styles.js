import styled from 'styled-components';
import { Container, Typography, CardContent } from '@material-ui/core';
import card from '@material-ui/core/Card';
import cardMedia from '@material-ui/core/CardMedia';

export const ContainerPost = styled(Container)`
  margin-top: 7%;
  margin-bottom: 7%;
`;

export const ContainerContent = styled.div`
  padding: 10vh;
`;

export const HeaderContent = styled(CardContent)`
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 40vh;
`;

export const ContainerHeader = styled.div`
  display: flex;
`;

export const Card = styled(card)`
`;

export const CardMedia = styled(cardMedia)`
  width: 70vh;
  height: 60vh;
`;

export const DateText = styled(Typography)`
  margin-bottom: 10%;
  color: #424242;
`;

export const AuthorText = styled(Typography)`
  margin-bottom: 02%;
  color: #212121;
  font-size: 20px;
`;

export const ContentText = styled(Typography)`
  color: #212121;
  font-size: 20px;
  padding-right: 20vh;
  padding-left: 20vh;
`;


export const Title = styled(Typography).attrs({
  component: 'h4', variant: 'h4'
})`
  font-weight: bold;
  color: #ffa000;
`;
