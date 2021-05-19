import { USER_LOGIN } from '../Types/UserLoginType';

export const userLogin = (data) => {
  return {
    type: USER_LOGIN,
    payload: data,
  };
};
