import { USER_DATA } from '../Types/UserDataType';

export const userData = (data) => {
  return {
    type: USER_DATA,
    payload: data,
  };
};
