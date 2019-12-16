import { userConstants } from './../_constants';

const authUser = (state = null, action) => {
    if(action.type === userConstants.USER_SET_AUTH) {
        return action.id;
    }
    return state;
}

export default authUser;