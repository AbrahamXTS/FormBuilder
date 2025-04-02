import { Group, Radio, RadioGroup } from "@mantine/core";

import { AnswerFieldProps } from "./AnswerFieldProps";

interface LinearScaleFieldProps extends Required<AnswerFieldProps> {}

export const LinearScaleField = ({
  formHandler: form,
  id,
  possibleAnswers,
}: LinearScaleFieldProps) => {
  return (
    <RadioGroup key={form.key(id)} {...form.getInputProps(id)}>
      <Group>
        {possibleAnswers.map((possibleAnswer, index) => (
          <Radio
            key={`${possibleAnswer}-${index}`}
            label={possibleAnswer}
            value={possibleAnswer}
          />
        ))}
      </Group>
    </RadioGroup>
  );
};
