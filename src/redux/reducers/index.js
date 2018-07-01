import { combineReducers } from 'redux';

import authToggleReducer from './authToggleReducer';
import {
  signup,
  loginAuthErrored,
  loginAuthSuccess
} from './usernameReducer';
import {
  posts,
  postsHasErrored,
  postsIsLoading
} from './fetchAllPostsReducer';
import {
  createPostErrored,
  createPostSuccess
} from './createPostReducer';

// import updateCount from './postNotificationReducer';

export default combineReducers({
  signup,
  isLoggedIn__store: authToggleReducer,
  posts,
  postsHasErrored,
  postsIsLoading,
  createPostErrored,
  createPostSuccess,
  // updateCount,
  loginAuthSuccess,
  loginAuthErrored,
});