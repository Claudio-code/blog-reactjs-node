import styled from 'styled-components';
import card from '@material-ui/core/Card';
import cardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


export const Container = styled(Grid).attrs({
  container: true
})`  
`;

export const ContainerContent = styled.div`
  width: 90vh;
  padding: 1%;
`;

export const Card = styled(card)`
  width: 50%;
  height: 40vh;
  display: flex;
  margin-bottom: 3%;
`;

export const CardMedia = styled(cardMedia)`
  width: 90vh;
`;

export const Title = styled(Typography).attrs({
  component: 'h4', variant: 'h4'
})`
  font-weight: bold;
  color: #ffa000;
`;

export const Content = styled(Typography).attrs({
  component: 'p', variant: 'p'
})`
  font-weight: 800;
  color: #424242;
`;

export const Footer = styled.div`
  margin-top: 7%;
  bottom: 0;
  display: flex;
  float: right;
`;