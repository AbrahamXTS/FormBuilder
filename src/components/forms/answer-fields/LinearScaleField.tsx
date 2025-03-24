import { Group, Radio, RadioGroup } from "@mantine/core";

import { Question } from "@/types";

interface LinearScaleFieldProps
  extends Required<Pick<Question, "possibleAnswers">> {}

export const LinearScaleField = ({
  possibleAnswers,
}: LinearScaleFieldProps) => {
  return (
    <RadioGroup>
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
