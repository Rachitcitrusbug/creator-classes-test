import { USER_DATA } from '../Types/UserDataType';

const initialState = {
  email: '',
  username: '',
  profile_image: '',
};

const userDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_DATA:
      return {
        ...state,
        email: action.payload.email,
        username: action.payload.username,
        profile_image: action.payload.profile_image,
      };
    default:
      return state;
  }
};

export default userDataReducer;
