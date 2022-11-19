import getConfig from "next/config";
import { fetchWrapper } from "helpers/fetch-wrapper";
const { publicRuntimeConfig } = getConfig();
const baseUrl = `https://rccgoic.herokuapp.com/api`;
export const userService = {
  login,
  signup,
  logout,
  getAll,
};

function login(email, password) {
  return fetchWrapper
    .post(`${baseUrl}/login`, { email, password })
    .then((response) => {
      return response;
    });
}

function signup(email, password, ref_code, role) {
  return fetchWrapper
    .post(`${baseUrl}/signup`, { email, password, ref_code, role })
    .then((response) => {
      return response;
    });
}

function logout(token) {
  return fetchWrapper
    .post(`${baseUrl}/auth/logout`, {}, token)
    .then((response) => {
      return response;
    });
}

function getAll() {
  return fetchWrapper.get(`${baseUrl}/users`);
}
