import {put, takeEvery,} from "redux-saga/effects";
import { updateJoke } from "../Reducers/userReducer";

const fetchJoke = async () => {
  const res = await fetch(
    "http://api.icndb.com/jokes/random?firstName=John&lastName=Doe"
  );
  const result = await res.json();
  return result.value.joke;
};

function* getjoke(action) {
  const joke = yield fetchJoke();
  yield put(updateJoke(joke));
//   yield put({ type: "JOKE_SUCCESS", payload: joke });
}

function* jokeSaga() {
  yield takeEvery("GET_JOKE", getjoke);
}

export default jokeSaga;
