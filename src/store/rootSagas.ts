/* eslint-disable @typescript-eslint/no-explicit-any */
import { all, fork } from "redux-saga/effects";
import investigationSaga from "./duckers/investigation/sagas";

export default function* rootSaga(): any {
  return yield all([fork(investigationSaga)]);
}
