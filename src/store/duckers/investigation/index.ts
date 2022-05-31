import { createActions, createReducer } from "reduxsauce";
import LoggerManager from "../../../utils/manager/Logger";
import { Actions, Reducers, State, SetInvestigation } from "./types";


// Create Initial state
export type { State };

export const INITIAL_STATE: State = {
  firstObservations: [],
};

// Create action Types and Creators
export const { Types, Creators } = createActions<Actions, Reducers>({
  createInvestigation: [],
  setInvestigation: ["investigation"],
});



// Create Reducer
const setInvestigation = (
  state = INITIAL_STATE,
  { investigation }: SetInvestigation
): State => {
  LoggerManager.info("Set Investigation State: Update investigation state with the new value", investigation);
  return {
    ...state,
    ...investigation,
  };
};

export default createReducer(INITIAL_STATE, {
  [Types.SET_INVESTIGATION]: setInvestigation,
});
