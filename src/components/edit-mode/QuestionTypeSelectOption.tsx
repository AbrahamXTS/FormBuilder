import { ComboboxItem, Group } from "@mantine/core";
import {
  IconAlignJustified,
  IconCalendar,
  IconCalendarClock,
  IconCheck,
  IconCheckbox,
  IconCircleDot,
  IconClock,
  IconLetterCaseToggle,
  IconLineDotted,
  IconSelect,
  IconStar,
  IconUpload,
} from "@tabler/icons-react";
import { ReactNode } from "react";

import { QuestionType } from "@/types";

const iconProps = {
  stroke: 1.5,
  color: "currentColor",
  opacity: 0.6,
  size: 18,
};

const ICONS: Record<QuestionType, ReactNode> = {
  CHECKBOX: <IconCircleDot {...iconProps} />,
  DATE: <IconCalendar {...iconProps} />,
  DATE_TIME: <IconCalendarClock {...iconProps} />,
  LINEAR_SCALE: <IconLineDotted {...iconProps} />,
  LONG_ANSWER: <IconAlignJustified {...iconProps} />,
  MULTIPLE_CHOICE: <IconCheckbox {...iconProps} />,
  SCORE: <IconStar {...iconProps} />,
  SELECT: <IconSelect {...iconProps} />,
  SHORT_ANSWER: <IconLetterCaseToggle {...iconProps} />,
  TIME: <IconClock {...iconProps} />,
  UPLOAD_FILE: <IconUpload {...iconProps} />,
};

interface QuestionTypeSelectOptionProps {
  option: ComboboxItem;
  checked?: boolean;
}

export const QuestionTypeSelectOption = ({
  checked,
  option,
}: QuestionTypeSelectOptionProps) => {
  return (
    <Group flex="1" gap="xs">
      {ICONS[option.value as QuestionType]}
      {option.label}
      {checked && (
        <IconCheck style={{ marginInlineStart: "auto" }} {...iconProps} />
      )}
    </Group>
  );
};
