import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { loadPage } from './page';

export default function* sagas() {
  yield takeLatest('LOAD_PAGE_REQUESTED', loadPage)
}
