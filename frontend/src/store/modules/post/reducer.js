 
import produce from 'immer';

const INITIAL_STATE = {
  posts: false,
  post: false,
};

export default function post(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@post/SET_ALL_POSTS': {
        draft.posts = action.payload.posts;
        break;
      }
      case '@post/SET_ONE_POST': {
        draft.post = action.payload.post;
        break;
      }
      default:
        return state;
  }});
}
