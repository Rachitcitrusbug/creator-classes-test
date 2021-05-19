import axios from "axios";
import { APP_CONFIG } from "../constants/config";

export function UserSignup(data) {
  try {
    return axios
      .post(`${APP_CONFIG.API_URL}user/signup/`, data, {
        headers: {
          "Content-Type": "application/json",
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
