// api/axiosClient.js
import axios, { AxiosResponse } from 'axios';
import firebase from 'firebase';
import queryString from 'query-string';
// Set up default config for http requests here


const getFirebaseToken = async () => {
    // 
    const currentUser = firebase.auth().currentUser;
    if (currentUser) {
        return currentUser.getIdToken();
    }
    // null user

    // const hasRememberedAccount = localStorage.getItem()


}

// Please have a look at here `https://github.com/axios/axios#request-
// config` for the full list of configs
const API = process.env.REACT_APP_API_URL
const API_PRODUCT = process.env.REACT_APP_API_PRODUCTION
// console.log(API)
const axiosClientDev = axios.create({
    baseURL: API,
    headers: {
        'content-type': 'application/json',
    },
    paramsSerializer: params => queryString.stringify(params),
});

axiosClientDev.interceptors.request.use(async (config) => {
    // Handle token here ... (Xử lý khi có token trả về)

    // const currentUser = firebase.auth().currentUser;

    // if (currentUser) {
    //     const token = await currentUser.getIdToken();
    //     config.headers.Authorization = `Bearer ${token}`
    // }

    const token = await getFirebaseToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config;
}, function (err) {
    // Do some thing with with request error
    return Promise.reject(err);
})

axiosClientDev.interceptors.response.use((response: AxiosResponse) => {
    // Xử lý khi có response trả về
    if (response && response.data) {
        return response.data;
    }
    return response;
}, (error) => {
    // Handle errors
    throw error;
});

export default axiosClientDev;