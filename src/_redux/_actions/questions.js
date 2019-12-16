import { questionConstants } from './../_constants';
import * as user from './../_actions/users';
import * as api from './../../utils/api';

export function getAllQuestions(questions) {
    return {
        type: questionConstants.QUESTIONS_GET_ALL,
        questions,
    }
}

export function addAnswer(authUser, qid, answer) {
    return {
        type: questionConstants.QUESTION_ADD_ANSWER,
        authUser,
        qid,
        answer,
    }
}

export function addQuestion(question) {
    return {
        type: questionConstants.QUESTION_ADD,
        question,
    }
}

export function handleSaveQuestion(optionOneText, optionTwoText, author) {
    return (dispatch) => {
        return api.saveQuestion({ optionOneText, optionTwoText, author }).then(
            (question) => {
                dispatch(addQuestion(question));
                dispatch(user.addQuestion(question));
            }
        );
    };
}