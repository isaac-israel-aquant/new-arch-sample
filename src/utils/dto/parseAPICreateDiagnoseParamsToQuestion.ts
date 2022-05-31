import {
  APIDiagnoseResponse,
} from "../../services/diagnoseInvestigationService";
import { Question } from "../../types/Investigation";

function getQuestionName(diagnose: APIDiagnoseResponse): string {
  return "Question name";
}

const parseAPICreateDiagnoseParamsToQuestion = (
  diagnose: APIDiagnoseResponse
): Question => {
  return {
    question: getQuestionName(diagnose),
    display: diagnose.prediction.display,
    name: diagnose.prediction.name,
    inverted: diagnose.prediction.is_inverted,
    isFirstObservation: false,
    translation: diagnose.prediction.translation,
    isGroupAnswer: diagnose.prediction.isGroupAnswer,
    isQuestionPresent: Boolean(diagnose.prediction.question),
  };
};

export default parseAPICreateDiagnoseParamsToQuestion;
