import axios from "axios";

export const api = axios.create({
  baseURL: `https://graph.facebook.com/${process.env.META_VERSION}/${process.env.META_PHONE_NUMBER_ID}/`,
  headers: {},
});
