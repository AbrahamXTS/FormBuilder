import { TimeInput } from "@mantine/dates";
import { IconClock } from "@tabler/icons-react";

export const TimeField = () => {
  return <TimeInput disabled leftSection={<IconClock size={16} />} />;
};
