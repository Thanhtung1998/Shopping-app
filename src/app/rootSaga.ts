import { all } from 'redux-saga/effects'
import { userSaga } from '../redux/Slice/authUser/userSaga'

export default function* rootSaga() {
    yield all([
        userSaga()
    ])
}

