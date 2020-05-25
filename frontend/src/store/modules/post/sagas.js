import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';

import { setAllPosts } from './actions';

export function* getAllPost() {
  try {
    const response = yield call(api.get, 'post');

    yield put(setAllPosts(response.data.posts));
  } catch (error) {
    toast.error(error.message);
  }
}

export function* salveContact({ payload }) {
  try {
    const { contact } = payload;
    
    yield call(api.post, 'contact', contact);

    toast.success('Saved contact');
  } catch (error) {
    toast.error(error.message);
  }
}


export default all([
  takeLatest('@post/GET_ALL_POSTS', getAllPost),
  takeLatest('persist/REHYDRATE', getAllPost),
  takeLatest('@post/SET_CONTACT', salveContact)
]);