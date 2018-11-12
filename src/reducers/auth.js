import {
    SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE,
    LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE,
    LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE
} from '../constants';

const token = localStorage.getItem('token');

const initialState = {
    isAuthenticated: false,
    user: {},
    token
};

export default function auth(state, action) {
    switch (action.type) {
        case SIGNUP_REQUEST:
        case LOGIN_REQUEST:
        case LOGOUT_REQUEST:
        case SIGNUP_SUCCESS:
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload.user,
                token: action.payload.token
            };
        case LOGOUT_SUCCESS:
            return {
                ...state,
                isAuthenticated: false,
                user: null,
                token: ''
            };
        case SIGNUP_FAILURE:
        case LOGIN_FAILURE:
        case LOGOUT_FAILURE:

        default:
            return initialState;
    }
}
