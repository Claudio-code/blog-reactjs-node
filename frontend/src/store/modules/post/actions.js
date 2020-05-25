export function getAllPosts() {
  return {
    type: '@post/GET_ALL_POSTS',
    payload: {},
  };
}

export function setAllPosts(posts) {
  return {
    type: '@post/SET_ALL_POSTS',
    payload: { posts },
  };
}

export function setAllPost(post) {
  return {
    type: '@post/SET_ONE_POST',
    payload: { post },
  };
}

export function sendContact(contact) {
  return {
    type: '@post/SET_CONTACT',
    payload: { contact },
  };
}