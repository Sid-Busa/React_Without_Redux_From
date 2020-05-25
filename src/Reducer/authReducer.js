const initialState = {
  authentication: false,
  currentUser: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_USER": {
      return {
        authentication: true,
        currentUser: action.payload.email,
      };
    }
    case "LOGOUT_USER": {
      return {
        authentication: false,
        currentUser: null,
      };
    }
    default: {
      return state;
    }
  }
};

export default authReducer;
