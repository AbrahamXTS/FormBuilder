import { Question } from "@/types";

import {
  CheckboxField,
  DateField,
  DateTimeField,
  LinearScaleField,
  LongAnswerField,
  MultipleChoiceField,
  ScoreField,
  SelectField,
  ShortAnswerField,
  TimeField,
  UploadFileField,
} from "./answer-fields";

interface FormAnswerFieldFactoryProps
  extends Pick<Question, "questionType" | "possibleAnswers"> {}

export const FormAnswerFieldFactory = ({
  questionType,
  possibleAnswers,
}: FormAnswerFieldFactoryProps) => {
  if (questionType === "SHORT_ANSWER") {
    return <ShortAnswerField />;
  }

  if (questionType === "LONG_ANSWER") {
    return <LongAnswerField />;
  }

  if (questionType === "CHECKBOX" && possibleAnswers) {
    return <CheckboxField possibleAnswers={possibleAnswers} />;
  }

  if (questionType === "MULTIPLE_CHOICE" && possibleAnswers) {
    return <MultipleChoiceField possibleAnswers={possibleAnswers} />;
  }

  if (questionType === "SELECT" && possibleAnswers) {
    return <SelectField possibleAnswers={possibleAnswers} />;
  }

  if (questionType === "UPLOAD_FILE") {
    return <UploadFileField />;
  }

  if (questionType === "LINEAR_SCALE" && possibleAnswers) {
    return <LinearScaleField possibleAnswers={possibleAnswers} />;
  }

  if (questionType === "SCORE" && possibleAnswers) {
    return <ScoreField possibleAnswers={possibleAnswers} />;
  }

  if (questionType === "DATE") {
    return <DateField />;
  }

  if (questionType === "TIME") {
    return <TimeField />;
  }

  if (questionType === "DATE_TIME") {
    return <DateTimeField />;
  }

  return <ShortAnswerField />;
};
