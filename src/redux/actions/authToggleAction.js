const setLoginStateAction = data => {
  return {
    type: 'SET_LOGIN_STATE',
    payload: data,
  };
};

export default setLoginStateAction;
