import { userConstants } from './../_constants';

const users = (state={}, action) => {
    switch (action.type) {
        case userConstants.USERS_GET_ALL:
            return {
                ...state,
                ...action.users
            }
        case userConstants.USER_ADD_ANSWER:
            const { authUser, qid, answer } = action;
            return {
                ...state,
                [authUser]: {
                    ...state[authUser],
                    answers: {
                        ...state[authUser].answers,
                        [qid]: answer
                    }
                }
            }
        case userConstants.USER_ADD_QUESTION:
            const { id, author } = action;
            return {
                ...state,
                [author]: {
                    ...state[author],
                    questions: state[author].questions.concat(id)
                }
            }
        default:
            return state;
    }
}

export default users;