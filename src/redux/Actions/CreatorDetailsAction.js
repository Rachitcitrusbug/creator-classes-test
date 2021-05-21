import { CREATOR_DETAILS } from '../Types/CreatorDetailsType';

export const creatorDetails = (data) => {
  return {
    type: CREATOR_DETAILS,
    payload: data,
  };
};
