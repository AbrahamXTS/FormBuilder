import { FormInEditModeHandler, Question } from "@/types";

export interface AnswerFieldProps extends Pick<Question, "possibleAnswers"> {
  formHandler: FormInEditModeHandler;
  questionIndex: number;
}
