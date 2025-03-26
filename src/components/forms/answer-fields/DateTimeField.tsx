import { DateTimePicker } from "@mantine/dates";
import { IconCalendarTime } from "@tabler/icons-react";

import { AnswerFieldProps } from "./AnswerFieldProps";

interface DateTimeFieldProps extends AnswerFieldProps {}

export const DateTimeField = ({
  formHandler: form,
  id,
}: DateTimeFieldProps) => {
  return (
    <DateTimePicker
      key={form.key(id)}
      leftSection={<IconCalendarTime size={16} />}
      {...form.getInputProps(id)}
    />
  );
};
