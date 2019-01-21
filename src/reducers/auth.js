import {
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_SUCCESS
} from "../constants";

const token = localStorage.getItem("token");

const initialState = {
    isAuthenticated: false,
    user: {},
    token: ""
};

export default function auth(state = initialState, action) {
    switch (action.type) {
        case SIGNUP_SUCCESS:
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload.user,
                token: action.payload.token
            };
        case LOGOUT_SUCCESS:
        case SIGNUP_FAILURE:
        case LOGIN_FAILURE:
            return {
                ...state,
                isAuthenticated: false,
                user: null,
                token: ""
            };
        default:
            return initialState;
    }
}
