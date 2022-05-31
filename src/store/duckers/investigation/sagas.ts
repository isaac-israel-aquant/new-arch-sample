/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { all, call, put, select, takeLatest } from "redux-saga/effects";
import LoggerManager from "../../../utils/manager/Logger";
import { Creators as reducer, Types as actions } from ".";
import { RootState } from "../../rootReducer";
import { Question } from "../../../types/Investigation";
import diagnoseInvestigationService from "../../../services/diagnoseInvestigationService";
import investigateService from "../../../services/investigateService";
import historicDataService from "../../../services/historicDataService";
import { CreateInvestigation } from "./types";


function* createInvestigation(action: CreateInvestigation) {
  try {
    LoggerManager.info("Create New Investigation: Start fetching");

    LoggerManager.info("Create New Investigation: Get params from the state manager");
    const manufacturer: string = yield select(({ model }: RootState) => model.manufacturer.name);
    const productType: string = yield select(({ model }: RootState) => model.productType.name);
    const model: string = yield select(({ model }: RootState) => model.name);
    const firstObservations: any[] = yield select(({ investigation }: RootState) => investigation.firstObservations);

    LoggerManager.success("Create New Investigation: Values from state manage",{ manufacturer, productType, model, firstObservations });

    LoggerManager.info("Create New Investigation: Call investigate api");

    const investigation: unknown = yield call([investigateService, investigateService.create],
      {
        manufacturer,
        productType,
        model,
        firstObservations,
      });

    LoggerManager.success("Create New Investigation: This is the response for investigate api",investigation);

    LoggerManager.info("Create New Investigation: Call diagnose api");


    const nextQuestion: Question = yield call([diagnoseInvestigationService, diagnoseInvestigationService.create],
      {
        manufacturer,
        productType,
        model,
        firstObservations,
      });

    LoggerManager.success("Create New Investigation: This is the response for diagnose api",nextQuestion);

    LoggerManager.info("Create New Investigation: Call historic data api");
    const historicData: unknown[] = yield call([historicDataService, historicDataService.get],
      {
        manufacturer,
        productType,
        model,
        firstObservations,
      });

    LoggerManager.success("Create New Investigation: This is the response for historic data api",historicData);


    LoggerManager.info("Create New Investigation: Update the app state");
    yield put(reducer.setInvestigation({
        id: (investigation as { id: string }).id,
        question: [nextQuestion],
        historicData: historicData,
        firstObservations: firstObservations,
      }));

    LoggerManager.success("Create New Investigation: Created with success");
  } catch (e) {
    const error = e as Error;
    LoggerManager.error(
      "Create New Investigation: Error to create new investigation",
      error.message
    );
  }
}

export default function* investigationSaga() {
  yield all([
    takeLatest(actions.CREATE_INVESTIGATION, createInvestigation),
  ]);
}
