import { TimeInput } from "@mantine/dates";
import { IconClock } from "@tabler/icons-react";

import { AnswerFieldProps } from "./AnswerFieldProps";

interface TimeFieldProps extends AnswerFieldProps {}

export const TimeField = ({ formHandler: form, id }: TimeFieldProps) => {
  return (
    <TimeInput
      key={form.key(id)}
      leftSection={<IconClock size={16} />}
      {...form.getInputProps(id)}
    />
  );
};
