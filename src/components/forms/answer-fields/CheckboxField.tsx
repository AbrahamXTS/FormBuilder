import { Radio, RadioGroup, Stack } from "@mantine/core";

import { AnswerFieldProps } from "./AnswerFieldProps";

interface CheckboxFieldProps extends Required<AnswerFieldProps> {}

export const CheckboxField = ({
  formHandler: form,
  id,
  possibleAnswers,
}: CheckboxFieldProps) => {
  return (
    <RadioGroup key={form.key(id)} {...form.getInputProps(id)}>
      <Stack>
        {possibleAnswers.map((possibleAnswer, index) => (
          <Radio
            key={`${possibleAnswer}-${index}`}
            label={possibleAnswer}
            value={possibleAnswer}
          />
        ))}
      </Stack>
    </RadioGroup>
  );
};
