export const usersReducer = (state = [], action) => {
  switch (action.type) {
    // case "FETCH_USER":
    //   return action.payload;
    case "FETCH_USERS":
      return action.payload;

    case "ADD_USER":
      return [...state, action.payload];
    case "LOGOUT":
      state = [];
    default:
      return state;
  }
};
