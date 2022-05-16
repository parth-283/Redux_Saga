import { all,call} from "redux-saga/effects";
import userSaga from './userSaga';
import jokeSaga from './jokeSaga';

function* rootSaga(){
    yield all([
        call(userSaga),
        call( jokeSaga)
       
    ])
}
export default rootSaga