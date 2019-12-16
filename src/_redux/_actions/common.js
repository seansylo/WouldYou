import * as api from './../../utils/api';
import * as user from './users';
import * as question from './questions';

export function initDataLoad() {
    return (dispatch) => {
        return api.getInitData().then(({users, questions}) => {
            dispatch(user.getAllUsers(users));
            dispatch(question.getAllQuestions(questions));
        });
    }
}