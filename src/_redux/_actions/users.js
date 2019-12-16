import { userConstants } from './../_constants';
import * as api from './../../utils/api';
import * as questions from './../_actions/questions';

export function getAllUsers(users) {
    return {
        type: userConstants.USERS_GET_ALL,
        users,
    }
}

export function addQuestion({id, author}) {
    return {
        type: userConstants.USER_ADD_QUESTION,
        id,
        author,
    }
}

export function addAnwser(authUser, qid, answer) {
    return {
        type: userConstants.USER_ADD_ANSWER,
        authUser,
        qid,
        answer,
    }
}

export function handleSaveAnswer(authUser, qid, answer) {
    return (dispatch) => {
        dispatch(addAnwser(authUser, qid, answer));
        dispatch(questions.addAnswer(authUser, qid, answer));

        return api.saveAnswer(authUser, qid, answer);
    };
}
