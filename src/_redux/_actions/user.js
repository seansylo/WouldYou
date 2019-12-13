import { userConstants } from './../_constants';
import * as api from './../../utils/api';
import * as questions from './../_actions/question';

export function getAllUsers(users) {
    return {
        type: userConstants.USERS_GET_ALL,
        users,
    }
}

export function addQuestion({ ID, author }) {
    return {
        type: userConstants.USER_ADD_QUESTION,
        ID,
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

        // return saveQuestionAnswer(authUser, qid, answer).catch(e => {
        //     console.warn('Error in handleSaveQuestionAnswer:', e);
        // });
    };
}
