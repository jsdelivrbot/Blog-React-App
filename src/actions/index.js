import axios from 'axios';

export const GET_POSTS = 'getPosts';
export const CREATE_POST = 'createPost';

const ROOT_URL = 'https://reduxblog.herokuapp.com/api';
const API_KEY = '?key=PAPERCLIP1234';

export function getPosts () {
    return {
        type: GET_POSTS,
        payload: axios.get(ROOT_URL + '/posts' + API_KEY)
    };
}

export function createPost (values, callback) {
    const request = axios
        .post(ROOT_URL + '/posts' + API_KEY, values)
        .then(callback);
    return {
        type: CREATE_POST,
        payload: request
    };
}
