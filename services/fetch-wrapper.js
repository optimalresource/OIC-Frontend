import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

export const fetchWrapper = {
  get,
  post,
  put,
  delete: _delete,
};

function get(url, token = null) {
  const requestOptions = {
    method: "GET",
    headers: token ? authHeader(url, token) : authHeader(url),
  };
  return fetch(url, requestOptions).then(handleResponse);
}

function post(url, body, token, content = true) {
  let requestOptions;
  if (content) {
    requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...authHeader(url, token),
      },
      body: JSON.stringify(body),
    };
  } else {
    requestOptions = {
      method: "POST",
      headers: {
        ...authHeader(url, token),
      },
      body: body,
    };
  }
  const resp = fetch(url, requestOptions).then(handleResponse);
  return resp;
}

function put(url, body, token, content = true) {
  let requestOptions;
  if (content) {
    requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        ...authHeader(url, token),
      },
      body: JSON.stringify(body),
    };
  } else {
    requestOptions = {
      method: "PUT",
      headers: {
        ...authHeader(url, token),
      },
      body: body,
    };
  }
  const resp = fetch(url, requestOptions).then(handleResponse);
  return resp;
}

// prefixed with underscored because delete is a reserved word in javascript
function _delete(url) {
  const requestOptions = {
    method: "DELETE",
    headers: authHeader(url),
  };
  return fetch(url, requestOptions).then(handleResponse);
}

function authHeader(url, token) {
  const userToken = token;
  const isLoggedIn = userToken && true;
  const isApiUrl = url.startsWith("https://rccgoic.herokuapp.com/api");

  if (isLoggedIn && isApiUrl) {
    return { Authorization: `Bearer ${userToken}`, credentials: "include" };
  } else {
    return {};
  }
}

function handleResponse(response) {
  return response.text().then((text) => {
    let data;
    let errorData;
    if (typeof text === "string") {
      data = text[0] === "{" ? JSON.parse(text) : text;
    } else {
      data = text && JSON.parse(text);
    }

    if (Array.isArray(data)) {
      errorData = [];
      for (let i = 0; i < data.length; i++) {
        if (typeof data[i] === "object") {
          for (const key in data[i]) {
            if (Array.isArray(data[i][key])) errorData.push(data[i][key][0]);
            else errorData.push(data[i][key]);
          }
        } else if (Array.isArray(data[i])) {
          errorData.push(data[i][0]);
        } else {
          errorData.push(data[i]);
        }
      }
    } else if (typeof data === "object") {
      errorData = [];
      for (const key in data) {
        if (Array.isArray(data[key])) errorData.push(data[key][0]);
        else errorData.push(data[key]);
      }
    } else {
      errorData = data;
    }

    if (!response.ok) {
      if ([401, 403].includes(response.status)) {
        // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
      }

      const error = errorData || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
}
