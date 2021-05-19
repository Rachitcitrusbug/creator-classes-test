import { USER_LOGIN } from '../Types/UserLoginType';

const initialState = {
  isAuthenticated: false,
};

const userLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        isAuthenticated: action.payload.isAuthenticated,
      };
    default:
      return state;
  }
};

export default userLoginReducer;
