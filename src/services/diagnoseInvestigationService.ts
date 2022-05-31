import { Question } from "../types/Investigation";
import parseAPICreateDiagnoseParamsToQuestion from "../utils/dto/parseAPICreateDiagnoseParamsToQuestion";
import salesForceConnection from "./connections/salesForceConection";

export interface APIDiagnosePrediction {
  question: string;
  display: string;
  name: string;
  inverted: boolean;
  translation: any;
  isGroupAnswer: boolean;
  is_inverted: boolean;
}
export interface APIDiagnoseProduct {}

export interface APIDiagnoseResponse {
  prediction: APIDiagnosePrediction;
}

class DiagnoseInvestigationService {
  async create(params: any): Promise<Question> {
    const response = await salesForceConnection.post<any, APIDiagnoseResponse>(
      "diagnose",
      params
    );

    return parseAPICreateDiagnoseParamsToQuestion({
      prediction: {
        question: "test 1",
        display: "test 1",
        name: "test1",
        inverted: false,
        translation: undefined,
        isGroupAnswer: false,
        is_inverted: false,
      },
    });
  }
}

// Create a  singleton for this class
const diagnoseInvestigationService = new DiagnoseInvestigationService();
export default diagnoseInvestigationService;
