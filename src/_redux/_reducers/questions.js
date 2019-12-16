import { questionConstants } from './../_constants';

const questions = (state = {}, action) => {
    switch(action.type) {
        case questionConstants.QUESTIONS_GET_ALL:
            return {
                ...state,
                ...action.questions
            };
        case questionConstants.QUESTION_ADD_ANSWER:
            const { authUser, qid, answer } = action;
            return {
                ...state,
                [qid]: {
                    ...state[qid],
                    [answer]: {
                        ...state[qid][answer],
                        votes: state[qid][answer].votes.concat(authUser)
                    }
                }
            };
        case questionConstants.QUESTION_ADD:
            const { question } = action;
            return {
                ...state,
                [question.id]: question
            };
        default:
            return state;
    }
}

export default questions;