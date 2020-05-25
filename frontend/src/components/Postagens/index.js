import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { CardContent, Typography, Button } from '@material-ui/core';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

import {
  Card,
  CardMedia,
  Container,
  ContainerContent,
  Title,
  Content,
  Footer
} from './styles';
import history from '../../services/history';
import { setAllPost } from '../../store/modules/post/actions';

export default function Postagens({ posts }) {
  const dispatch = useDispatch();

  function openPost(item) {
    dispatch(setAllPost(item));
    return history.push('/post');
  }

  return(
    <Container>
      {posts && posts.map(item => (
      <Card>
        <CardMedia
          image={item.post.url}
          title={item.post.name}
        />
        <ContainerContent>
          <CardContent >
            <Typography component="h5" variant="h5">
              {item.author}
            </Typography>
            <Title>
              {item.title}
            </Title>
            <Content>
              {item.description}
            </Content>
            <Footer>
            <Button size="small" onClick={() => openPost(item)}>
              <DoubleArrowIcon />
            </Button>
            </Footer>
          </CardContent>
        </ContainerContent>
      </Card>
      ))}
    </Container>
  );
}
