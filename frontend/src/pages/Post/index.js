import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { CardContent } from '@material-ui/core';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';


import Header from '../../components/Header';
import {
  ContainerPost,
  Card,
  CardMedia,
  ContainerContent,
  ContainerHeader,
  DateText,
  AuthorText,
  Title,
  ContentText,
  HeaderContent
} from './styles';

export default function Post() {
  const post = useSelector(state => state.post.post);
  const [date, setDate] = useState(parseISO(post.created_at));

  return(
    <div>
      <Header />
      <ContainerPost>
      <Card>
        <div>
          <ContainerHeader>
            <CardMedia
              image={post.post.url}
              title={post.post.name}
            />
            <HeaderContent >
              <DateText>
                {format(date, "MMM d',' YYY", { locale: pt })}
              </DateText>
              <AuthorText>
                {post.author}
              </AuthorText>
              <Title>
                {post.title}
              </Title>
            </HeaderContent>
          </ContainerHeader>
        </div>
        <ContainerContent>
          <CardContent>
            <ContentText>
              {post.content}
            </ContentText> 
          </CardContent>
        </ContainerContent>
      </Card>
      </ContainerPost>
    </div>
  );
}
