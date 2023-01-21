import axios from 'axios';

const domain = 'http://localhost:3333';

// transform the parameters before interface request, add same domain
axios.interceptors.request.use((config) => ({
  ...config,
  url: domain + config.url,
}));

//intercept returned results, 2 parts: data transformation & error handling
axios.interceptors.response.use((response) => response.data, (err) => Promise.reject(err));

// get resource from server
export const get = (url) => axios.get(url);

// add a new resource
export const post = (url, params) => axios.post(url, params);

// update an existing resource
export const put = (url, params) => axios.post(url, params);

// delete an existing resource
export const del = (url, params) => axios.post(url, params);

export const patch = (url, params) => axios.post(url, params);