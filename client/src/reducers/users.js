const usersReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_USERS":
      return action.payload;
    case  "UPDATE_CURRENT_USER":
      return state.map((states)=>states._id === action.payload._id? action.payload: states)
    default:
      return state;
  }
};

export default usersReducer;