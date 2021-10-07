const sessionCheck = (store) => (next) => (action) => {
  const currTime = Date.now();
  const {isLoggedIn, expireTZ} = store.getState((state) => state.auth);
  if (isLoggedIn) {
    if (currTime > expireTZ) {
      next(
        store.dispatch({
          type: 'LOGOUT',
          payload: {
            isSessionEnd: false,
            message: 'Session has ended',
          },
        }),
      );
    } else {
      next(action);
    }
  }
  next(action);
};

export default sessionCheck;
