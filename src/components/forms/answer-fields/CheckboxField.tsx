import { Radio, RadioGroup, Stack } from "@mantine/core";

import { Question } from "@/types";

interface CheckboxFieldProps
  extends Required<Pick<Question, "possibleAnswers">> {}

export const CheckboxField = ({ possibleAnswers }: CheckboxFieldProps) => {
  return (
    <RadioGroup>
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
