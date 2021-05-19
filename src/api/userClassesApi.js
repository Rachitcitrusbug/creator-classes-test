import axios from 'axios';
import { APP_CONFIG } from '../constants/config';

export function UserClasses() {
  try {
    return axios
      .get(`${APP_CONFIG.API_URL}user/class-filter/?creator=&class_keyword=`, {
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
