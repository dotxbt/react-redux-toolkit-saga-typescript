import { all, fork } from 'redux-saga/effects';
import { postSaga } from './postSagas';

export function* rootSaga() {
    yield all([
       fork(postSaga),
    ]);
}