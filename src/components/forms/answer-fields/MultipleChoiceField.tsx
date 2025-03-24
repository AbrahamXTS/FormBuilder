import { Checkbox, CheckboxGroup, Stack } from "@mantine/core";

import { Question } from "@/types";

interface MultipleChoiceFieldProps
  extends Required<Pick<Question, "possibleAnswers">> {}

export const MultipleChoiceField = ({
  possibleAnswers,
}: MultipleChoiceFieldProps) => {
  return (
    <CheckboxGroup>
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
