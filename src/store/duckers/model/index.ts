import { createReducer } from "reduxsauce";
import { State } from "./types";

// Export Saga

// Create Initial state
export type { State };

export const INITIAL_STATE: State = {
  manufacturer: { name: "manufacturer" },
  productType: { name: "product type" },
  name: "model",
};

export default createReducer(INITIAL_STATE, {});
