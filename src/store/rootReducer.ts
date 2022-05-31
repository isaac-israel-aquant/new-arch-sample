import AsyncStorageLib from "@react-native-async-storage/async-storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import investigationReducers, {
  State as InvestigationState,
} from "./duckers/investigation";
import modelReducers, { State as ModelState } from "./duckers/model";



export type RootState = {
  investigation: InvestigationState;
  model: ModelState;
};

const rootReducer = combineReducers({
  investigation: investigationReducers,
  model: modelReducers,
});

const persistConfig = {
  key: "LIFTED_REDUX_STORE",
  storage: AsyncStorageLib,
  whitelist: ["crypto"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
