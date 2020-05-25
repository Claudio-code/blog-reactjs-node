import React from 'react';
import { useSelector } from 'react-redux';

import Header from '../../components/Header';
import Postagens from '../../components/Postagens';
import { ContainerBody } from './styles';

export default function Home() {
  const posts = useSelector(state => state.post.posts);

  return(
    <div>
      <Header />
      <ContainerBody>
        <Postagens posts={posts} />
      </ContainerBody>
    </div>
  );
}
