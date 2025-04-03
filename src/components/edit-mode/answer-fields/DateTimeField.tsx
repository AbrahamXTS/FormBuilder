import { DateTimePicker } from "@mantine/dates";
import { IconCalendarTime } from "@tabler/icons-react";

export const DateTimeField = () => {
  return (
    <DateTimePicker
      disabled
      leftSection={<IconCalendarTime size={16} />}
      placeholder="Fecha y hora"
    />
  );
};
