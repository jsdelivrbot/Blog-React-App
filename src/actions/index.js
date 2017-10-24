import axios from 'axios';

export const GET_POSTS = 'getPosts';
export const GET_SINGLE_POST = 'getSinglePost';
export const CREATE_POST = 'createPost';
export const DELETE_POST = 'deletePost';

const ROOT_URL = 'https://reduxblog.herokuapp.com/api';
const API_KEY = '?key=SHAON1234';

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

export function getSinglePost (id) {
    return {
        type: GET_SINGLE_POST,
        payload: axios.get(ROOT_URL + '/posts/' + id + API_KEY)
    };
}

export function deletePost (id, callback) {
    const request = axios
        .delete(ROOT_URL + '/posts/' + id + API_KEY)
        .then(callback);
    return (dispatch) => {
        request.then(() => {
            dispatch({
                type: DELETE_POST,
                payload: id
            });
        });
    };
}
