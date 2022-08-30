export const reducer = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE ACTIVE USER":
      return { ...state, activeUser: action.payload };
    default:
      return state;
  }
};
