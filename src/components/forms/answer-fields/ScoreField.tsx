import { Rating } from "@mantine/core";

import { AnswerFieldProps } from "./AnswerFieldProps";

interface ScoreFieldProps extends Required<AnswerFieldProps> {}

export const ScoreField = ({
  formHandler: form,
  id,
  possibleAnswers,
}: ScoreFieldProps) => {
  return (
    <Rating
      count={possibleAnswers.length}
      key={form.key(id)}
      size="md"
      {...form.getInputProps(id)}
    />
  );
};
