import {
  Box,
  Button,
  CloseButton,
  Group,
  Radio,
  Stack,
  Text,
  TextInput,
  Tooltip,
} from "@mantine/core";

import { AnswerFieldProps } from "./AnswerFieldProps";
import { useModifyPossibleAnswers } from "@/hooks";

interface LinearScaleFieldProps extends Required<AnswerFieldProps> {}

export const LinearScaleField = ({
  formHandler,
  questionIndex,
  possibleAnswers,
}: LinearScaleFieldProps) => {
  const { addPossibleAnswer, removePossibleAnswer } =
    useModifyPossibleAnswers(formHandler);

  return (
    <Box>
      <Group justify="center">
        {possibleAnswers.map((_, possibleAnswerIndex) => (
          <Stack align="center" key={possibleAnswerIndex}>
            <Group gap="sm">
              <Text>{possibleAnswerIndex + 1}.</Text>

              <Radio disabled />

              <Tooltip label="Eliminar opción">
                <CloseButton
                  onClick={() =>
                    removePossibleAnswer(questionIndex, possibleAnswerIndex)
                  }
                  tabIndex={-1}
                />
              </Tooltip>
            </Group>

            <TextInput
              size="xs"
              {...formHandler.getInputProps(
                `questions.${questionIndex}.possibleAnswers.${possibleAnswerIndex}`
              )}
            />
          </Stack>
        ))}
      </Group>

      <Button
        mt="md"
        onClick={() => addPossibleAnswer(questionIndex)}
        variant="transparent"
      >
        Añadir opción
      </Button>
    </Box>
  );
};
