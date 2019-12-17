import { userConstants } from './../_constants';

export function setAuthUser(id) {
    return {
        type: userConstants.USER_SET_AUTH,
        id
    }
}