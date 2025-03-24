import { DateTimePicker } from "@mantine/dates";
import { IconCalendarTime } from "@tabler/icons-react";

export const DateTimeField = () => {
  return <DateTimePicker leftSection={<IconCalendarTime size={16} />} />;
};
