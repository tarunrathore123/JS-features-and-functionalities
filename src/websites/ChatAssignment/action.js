export const updateActiveUser = (id) => (dispatch, getState) => {
  dispatch({ type: "UPDATE ACTIVE USER", payload: id });
};
