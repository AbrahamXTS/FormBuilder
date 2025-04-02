import { FormHandler, Question } from "@/types";

export interface AnswerFieldProps
  extends Pick<Question, "id" | "possibleAnswers"> {
  formHandler: FormHandler;
}
