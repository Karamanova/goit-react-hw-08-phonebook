import axios from "axios";
import { BASE_URL } from "./constants";

axios.defaults.baseURL = BASE_URL;

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};