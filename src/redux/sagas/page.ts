import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

export function* loadPage() {
  try{
    const pages = localStorage.getItem('pages');
    yield put({type: 'LOAD_PAGE_SUCCESSED', payload: pages});
  }catch(e) {
    yield put({type: 'LOAD_PAGE_FAILED', message: e.message});
  }
}
