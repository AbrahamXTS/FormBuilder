import { FormHandler, Question } from "@/types";

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
  extends Pick<Question, "id" | "questionType" | "possibleAnswers"> {
  formHandler: FormHandler;
}

export const FormAnswerFieldFactory = ({
  formHandler,
  id,
  questionType,
  possibleAnswers,
}: FormAnswerFieldFactoryProps) => {
  const formAnswerFields = {
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

  const AnswerField = formAnswerFields[questionType] || ShortAnswerField;

  return (
    <AnswerField
      formHandler={formHandler}
      id={id}
      possibleAnswers={possibleAnswers!}
    />
  );
};
