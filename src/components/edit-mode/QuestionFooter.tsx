import { ActionIcon, Button, Group, Tooltip } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";

import { useModifyForm } from "@/hooks";
import { FormInEditModeHandler } from "@/types";

interface QuestionFooterProps {
  formHandler: FormInEditModeHandler;
  questionIndex: number;
}

export const QuestionFooter = ({
  formHandler,
  questionIndex,
}: QuestionFooterProps) => {
  const { addQuestion, removeQuestion } = useModifyForm(formHandler);

  return (
    <Group gap="xs" justify="space-between">
      <Button onClick={() => addQuestion()}>Añadir pregunta</Button>

      <Tooltip label="Eliminar pregunta">
        <ActionIcon
          color="red"
          onClick={() => removeQuestion(questionIndex)}
          size="input-sm"
          variant="light"
        >
          <IconTrash />
        </ActionIcon>
      </Tooltip>
    </Group>
  );
};
