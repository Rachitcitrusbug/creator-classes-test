import axios from 'axios';
import { APP_CONFIG } from '../constants/config';

export function CreatorClassesList(id) {
  try {
    return axios
      .get(`${APP_CONFIG.API_URL}user/class-filter/?creator=${id}&class_keyword=`, {
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
