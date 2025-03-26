import { DateInput } from "@mantine/dates";
import { IconCalendar } from "@tabler/icons-react";

import { AnswerFieldProps } from "./AnswerFieldProps";

interface DateFieldProps extends AnswerFieldProps {}

export const DateField = ({ formHandler: form, id }: DateFieldProps) => {
  return (
    <DateInput
      key={form.key(id)}
      leftSection={<IconCalendar size={16} />}
      {...form.getInputProps(id)}
    />
  );
};
