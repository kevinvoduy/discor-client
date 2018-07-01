export default function(state={}, action) {
  switch(action.type) {
    case 'SET_LOGIN_STATE':
      return Object.assign({}, state, {
        isLoggedIn: action.payload
      });
    default:
      return state;
  }
}