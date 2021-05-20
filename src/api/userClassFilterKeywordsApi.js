import axios from 'axios';
import { APP_CONFIG } from '../constants/config';

export function UserClassFilterKeywords() {
  try {
    return axios
      .get(`${APP_CONFIG.API_URL}creator/keywords/`, {
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
