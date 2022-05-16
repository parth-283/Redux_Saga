import {  put, takeEvery, takeLatest, delay } from "redux-saga/effects";
import { updateAge,updateName } from "../Reducers/userReducer"; 

const getUserName = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const result = await res.json();
  return result[Math.floor((Math.random() * 10) + 1)].name;
};

function* fetchUser(action) {
  try {
    const username = yield getUserName();
    yield put(updateName(username));
    // yield put({ type: "UPDATE_NAME_SUCCESS", payload: username });
  
    //   const user = yield call(Api.fetchUser, action.payload.userId);
    //   yield put({type: "USER_FETCH_SUCCEEDED", user: user});
  } catch (e) {
    console.log(e);
  }
}

function* changeAge(action){
    yield delay(2000)
    yield put(updateAge(30))
    // yield put({type:"UPDATE_AGE_SUCCESS",payload:30})
}

function* userSaga() {
  yield takeLatest ("UPDATE_NAME", fetchUser);
  yield takeEvery ("UPDATE_AGE", changeAge);
}

export default userSaga
