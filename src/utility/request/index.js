import axios from "axios";

axios.interceptors.request.use(function (config) {
  return config;
});

axios.interceptors.response.use(
  (response) => {
    if (response.status === 401) {
    }
    return response;
  },
  (error) => Promise.reject(error)
);

const request = async (options) => {
  return await axios(options)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      if (error.code == "ECONNABORTED") {
        return {
          message: "Request timeout",
          error,
        };
      }
      return error;
    });
};

const getRequest = async (url, head, jwtToken) => {
  let headers = {};

  if (sessionStorage.getItem("state") !== null) {
    let token = "";
    token = sessionStorage.getItem("state");
    headers = {
      Authorization: `Bearer ${""}`,
      "Content-Type": "application/json",
    };
  }
  let response;
  let requestOptions;

  if (head !== undefined && head === true) {
    requestOptions = {
      url: url,
      method: "get",
      timeout: 1000 * 3000,
      validateStatus: (status) => {
        return status >= 200 && status < 500;
      },
    };
  } else {
    requestOptions = {
      url: url,
      method: "get",
      headers: headers,
      timeout: 1000 * 3000,
      validateStatus: (status) => {
        return status >= 200 && status < 500;
      },
    };
  }

  response = await request(requestOptions);
  return response;
};

const postRequest = async (url, params) => {
  let headers = {};

  if (sessionStorage.getItem("state") !== null) {
    let token = "";
    token = sessionStorage.getItem("state");
    headers = {
      Authorization: `Bearer ${""}`,
      "Content-Type": "application/json",
    };
  }
  let response;
  const requestOptions = {
    url: url,
    method: "POST",
    headers: headers,
    data: params,
    timeout: 1000 * 3000,
    validateStatus: (status) => {
      return status >= 200 && status < 500;
    },
  };

  response = await request(requestOptions);
  return response;
};

export { getRequest, postRequest };
