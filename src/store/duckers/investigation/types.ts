/* eslint-disable @typescript-eslint/ban-types */
import { AnyAction } from "redux";
import { Question } from "../../../types/Investigation";

export type State = {
  id?: string;
  question?: Question[];
  historicData?: any[];
  firstObservations: any[];
};

export interface Actions {
  CREATE_INVESTIGATION: "CREATE_INVESTIGATION";
  SET_INVESTIGATION: "SET_INVESTIGATION";
  ADD_NEXT_QUESTION: "ADD_NEXT_QUESTION";
}

export interface CreateInvestigation extends AnyAction {
  type: Actions["CREATE_INVESTIGATION"];
}

export interface SetInvestigation extends AnyAction {
  type: Actions["SET_INVESTIGATION"];
  investigation: State;
}

export interface Reducers {
  createInvestigation(): CreateInvestigation;
  setInvestigation(investigation: State): SetInvestigation;
}

export const test ="1"
