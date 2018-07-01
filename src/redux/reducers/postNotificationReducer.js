function updateCount(state = 0, action) {
  switch (action.type) {
    case 'UPDATE_POST_COUNT':
      return state + 1;

    default:
        return state;
  }
}

export default updateCount;