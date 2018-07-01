export function createPostErrored(state = false, action) {
  switch (action.type) {
    case 'CREATE_POST_ERRORED':
      return action.hasErrored;

      default:
        return state;
  }
}

export function createPostSuccess(state = [], action) {
  switch (action.type) {
    case 'CREATE_POST_SUCCESS':
      return [
        action.post,
        ...state
      ];

      default:
        return state;
  }
}