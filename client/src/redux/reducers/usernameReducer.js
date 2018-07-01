export function signup (state={}, action) {
  switch(action.type) {
    case 'SAVE_USERNAME':
      return Object.assign({}, state, {
        username: action.payload.username,
        firstname: action.payload.firstname,
        lastname: action.payload.lastname,
      });
    default:
      return state;
  }
}

export function loginAuthErrored (state = false, action) {
  switch (action.type) {
    case 'LOGIN_AUTH_ERRORED':
      return action.hasErroered;
    default:
      return state;
  }
}

export function loginAuthSuccess (state = {}, action) {
  switch(action.type) {
    case 'LOGIN_AUTH_SUCCESS':
      return action.loginAuthSuccess;
    default:
      return state;
  }
}
