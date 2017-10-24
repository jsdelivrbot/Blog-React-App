import _ from 'lodash';
import { GET_POSTS, GET_SINGLE_POST, DELETE_POST } from '../actions';

export default function (state = {}, action) {
    switch (action.type) {
        case DELETE_POST:
            return _.omit(state, action.payload);
        case GET_POSTS:
            return _.mapKeys(action.payload.data, 'id');
        case GET_SINGLE_POST:
            return { ...state, [action.payload.data.id]: action.payload.data};
        default:
            return state;
    }
}
