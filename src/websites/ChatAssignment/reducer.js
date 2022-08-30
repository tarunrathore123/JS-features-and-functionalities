export const reducer = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE ACTIVE USER":
      return { ...state, activeUser: action.payload };
    case "UPDATE CURRENT USER":
      return { ...state, currentUser: action.payload };
    default:
      return state;
  }
};
