import {
  put,
  takeEvery,
  debounce,
  select,
  takeLatest,
} from "@redux-saga/core/effects";
import { getRequest, postRequest } from "../../utility/request";
import { Api } from "../../utility/api";

function* getProductListSaga(action) {
  try {
    const response = yield getRequest(`${Api.getProducts}${action.payload}`);
    if (response.status == 200) {
      console.log("GET POST RESPONSE DATA", response.data);
      let data = response.data;
      yield put({
        type: "Common/getProductsSuccess",
        payload: data,
      });
    } else {
      yield put({
        type: "Common/getProductsFailure",
        payload: "not 200",
      });
    }
  } catch (error) {
    yield put({
      type: "Common/getProductsFailure",
      payload: error,
    });
  }
}

export default function* mySaga() {
  yield takeEvery("Common/getProducts", getProductListSaga);
}
