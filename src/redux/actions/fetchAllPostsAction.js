import axios from 'axios';

export function postsHasErrored(bool) {
  return {
      type: 'POSTS_HAS_ERRORED',
      hasErrored: bool
  };
}

export function postsIsLoading(bool) {
  return {
      type: 'POSTS_IS_LOADING',
      isLoading: bool
  };
}

export function postsFetchDataSuccess(posts) {
  return {
      type: 'POSTS_FETCH_DATA_SUCCESS',
      posts
  };
}

// action creator
export function postsFetchData(url) {
  return (dispatch) => {
    dispatch({ type: 'POSTS_FETCH_DATA' });

    const request = axios({
      method: 'GET',
      url: url,
    });

    return request.then(
      response => dispatch(postsFetchDataSuccess(response.data)),
      () => postsHasErrored(true)
    );
  };
}
