import { FormInEditModeHandler, Question } from "@/types";

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
  extends Pick<Question, "possibleAnswers" | "questionType"> {
  formHandler: FormInEditModeHandler;
  questionIndex: number;
}

export const AnswerFieldFactory = ({
  formHandler,
  possibleAnswers,
  questionIndex,
  questionType,
}: FormAnswerFieldFactoryProps) => {
  const answerFields = {
    SHORT_ANSWER: ShortAnswerField,
    LONG_ANSWER: LongAnswerField,
    CHECKBOX: CheckboxField,
    MULTIPLE_CHOICE: MultipleChoiceField,
    SELECT: SelectField,
    UPLOAD_FILE: UploadFileField,
    LINEAR_SCALE: LinearScaleField,
    SCORE: ScoreField,
    DATE: DateField,
    TIME: TimeField,
    DATE_TIME: DateTimeField,
  };

  const AnswerField = answerFields[questionType] || ShortAnswerField;

  return (
    <AnswerField
      formHandler={formHandler}
      questionIndex={questionIndex}
      possibleAnswers={possibleAnswers!}
    />
  );
};
