import { userConstants } from './../_constants';

export function setAuthUser(userID) {
    return {
        type: userConstants.USER_SET_AUTH,
        userID
    }
}