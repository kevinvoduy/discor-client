import axios from 'axios';

export function saveUsernameAction(data) {
  return {
    type: 'SAVE_USERNAME',
    payload: data,
  };
}

export function loginAuthErroed(bool) {
  return {
    type: 'LOGIN_AUTH_ERRORED',
    isLoading: bool,
  };
}

export function loginAuthSuccess(status) {
  return {
    type: 'LOGIN_AUTH_SUCCESS',
    loginAuthSuccess: status,
  };
}

// action creator
export function loginAuth(url, payload) {
  return dispatch => {
    dispatch({ type: 'LOGIN_AUTH'});

    const request = axios({
      method: 'POST',
      url: url,
      data: payload,
    });

    return request.then(
      response => dispatch(loginAuthSuccess(response.status)),
      () => loginAuthErroed(true),
    );
  };
}