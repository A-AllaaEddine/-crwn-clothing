import { takeLatest, call, put } from 'redux-saga/effects';

import ShopActionTypes from './shop.types';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import {
    fetchCollectionsSuccess,
    fetchCollectionsFailure
} from './shop.actions';

/* A generator function that is going to be fired when the action `FETCH_COLLECTIONS_START` is
dispatched. */
export function* fetchCollectionsAsync() {
    yield console.log('I am fired');

    try{
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
        yield put(fetchCollectionsSuccess(collectionsMap));
    } catch(error) {
        console.log(error);
        yield put(fetchCollectionsFailure(error));
    }
}

/* A generator function that is going to be fired when the action `FETCH_COLLECTIONS_START` is
dispatched. */
export function* fetchCollectionsStart() {
    yield takeLatest(
        ShopActionTypes.FETCH_COLLECTIONS_START, 
        fetchCollectionsAsync
    );
}