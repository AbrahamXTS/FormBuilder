import {
  Box,
  Button,
  Checkbox,
  CloseButton,
  Flex,
  Stack,
  TextInput,
  Tooltip,
} from "@mantine/core";

import { useModifyPossibleAnswers } from "@/hooks";

import { AnswerFieldProps } from "./AnswerFieldProps";

interface MultipleChoiceFieldProps extends Required<AnswerFieldProps> {}

export const MultipleChoiceField = ({
  formHandler,
  possibleAnswers,
  questionIndex,
}: MultipleChoiceFieldProps) => {
  const { addPossibleAnswer, removePossibleAnswer } =
    useModifyPossibleAnswers(formHandler);

  return (
    <Box>
      <Stack>
        {possibleAnswers.map((_, possibleAnswerIndex) => (
          <Flex align="center" gap="sm" key={possibleAnswerIndex}>
            <Checkbox disabled />

            <TextInput
              w="100%"
              {...formHandler.getInputProps(
                `questions.${questionIndex}.possibleAnswers.${possibleAnswerIndex}`
              )}
            />

            <Tooltip label="Eliminar opción">
              <CloseButton
                onClick={() =>
                  removePossibleAnswer(questionIndex, possibleAnswerIndex)
                }
              />
            </Tooltip>
          </Flex>
        ))}
      </Stack>

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
