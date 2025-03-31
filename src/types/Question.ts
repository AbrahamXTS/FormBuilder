export interface Question {
  id: string;
  title: string;
  description?: string;
  questionType: QuestionType;
  possibleAnswers?: string[];
}

export type QuestionType =
  | "SHORT_ANSWER"
  | "LONG_ANSWER"
  | "CHECKBOX"
  | "MULTIPLE_CHOICE"
  | "SELECT"
  | "UPLOAD_FILE"
  | "LINEAR_SCALE"
  | "SCORE"
  | "DATE"
  | "TIME"
  | "DATE_TIME";
