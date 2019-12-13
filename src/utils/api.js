import {
    _getUsers,
    _getQuestions,
    _saveQuestion,
    _saveQuestionAnswer,
  } from './_DATA.js';

export function getAllUsers() {
    return _getUsers();
}

export function getAllQuestions() {
    return _getQuestions();
}

export function saveQuestion(question) {
    return _saveQuestion(question);
}

export function saveAnswer(authUser, qid, answer) {
    return _saveQuestionAnswer({authUser, qid, answer});
}

export function getInitData() {
    return Promise.all([getAllUsers(), getAllQuestions()])
        .then(([users, questions]) => ({
            users,
            questions,
        }));
}