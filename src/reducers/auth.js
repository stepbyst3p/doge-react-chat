import * as types from '../constants';

const initialState = {
    isAuthenticated: false,
    user: {},
    token: ''
};

export default function auth(state, action) {
    switch (action.type) {
        case types.SIGNUP_REQUEST:
        case types.LOGIN_REQUEST:
        case types.LOGOUT_REQUEST:
        case types.SIGNUP_SUCCESS:
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload.user,
                token: action.payload.token
            };
        case types.LOGOUT_SUCCESS:
            return {
                ...state,
                isAuthenticated: false,
                user: null,
                token: ''
            };
        case types.SIGNUP_FAILURE:
        case types.LOGIN_FAILURE:
        case types.LOGOUT_FAILURE:

        default:
            return initialState;
    }
}
