export interface Question {
  question: string;
  display: string;
  name: string;
  inverted: boolean;
  isFirstObservation: boolean;
  order?: number;
  translation: any;
  isGroupAnswer: boolean;
  isQuestionPresent: boolean;
}
