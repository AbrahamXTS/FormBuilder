import { DateInput } from "@mantine/dates";
import { IconCalendar } from "@tabler/icons-react";

export const DateField = () => {
  return <DateInput leftSection={<IconCalendar size={16} />} />;
};
