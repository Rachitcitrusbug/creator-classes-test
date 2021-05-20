import axios from 'axios';
import { APP_CONFIG } from '../constants/config';

export function CreatorProfileDetails(id) {
  try {
    return axios
      .get(`${APP_CONFIG.API_URL}creator/creator-detail/${id}/`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error;
      });
  } catch (err) {
    return err;
  }
}
