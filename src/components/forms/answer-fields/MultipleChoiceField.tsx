import { Checkbox, CheckboxGroup, Stack } from "@mantine/core";

import { AnswerFieldProps } from "./AnswerFieldProps";

interface MultipleChoiceFieldProps extends Required<AnswerFieldProps> {}

export const MultipleChoiceField = ({
  formHandler: form,
  id,
  possibleAnswers,
}: MultipleChoiceFieldProps) => {
  return (
    <CheckboxGroup key={form.key(id)} {...form.getInputProps(id)}>
      <Stack>
        {possibleAnswers.map((possibleAnswer, index) => (
          <Checkbox
            key={`${possibleAnswer}-${index}`}
            label={possibleAnswer}
            value={possibleAnswer}
          />
        ))}
      </Stack>
    </CheckboxGroup>
  );
};
