import axios from 'axios';
import { API_ENDPOINT } from 'react-native-dotenv';
import AsyncStorage from '@react-native-community/async-storage';
import { Actions } from 'react-native-router-flux';

const endPoint = API_ENDPOINT;
export const post = async (url, data, debug = false, timeout = 6000) => {
    const token = await AsyncStorage.getItem('token');
    const serverUrl = endPoint;
    const dataUrl = serverUrl + url;
    const headers = {
        'Content-Type': 'application/json; charset=UTF-8',
        'Accept': 'application/json;',
        'Authorization': `Bearer ${token}`,
    };

    if (AsyncStorage.getItem('token')) {
        headers['Authorization'] = AsyncStorage.getItem('token');
    }

    return axios({
        method: 'POST',
        url: dataUrl,
        data: data,     // post Data
        timeout: timeout,  // timeout
        headers,
    })
        .then(response => {
            // const hasToken = !!response.headers.authorization;
            // if (hasToken && process.browser) {
            //     // console.log('have token')
            //     // console.log(response.headers.authorization)
            //     refreshToken(response.headers.authorization);
            // }
            if (response && debug) {
                console.log(`------------------res:${url}------------------`);
                console.log(response.data);
            }
            return response.data;
        })
        .catch((e) => {
            catchError(e);
            return e;
        });
};
const catchError = async (e) => {
    if (e?.response?.status === 401) {
        const asyncStorageKeys = await AsyncStorage.getAllKeys();
        if (asyncStorageKeys.length > 0) {
            AsyncStorage.clear();
        }
        Actions.replace('Auth');
    }
};
