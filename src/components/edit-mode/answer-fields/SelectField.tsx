import {
  Box,
  Button,
  CloseButton,
  Flex,
  Stack,
  Text,
  TextInput,
  Tooltip,
} from "@mantine/core";

import { useModifyPossibleAnswers } from "@/hooks";

import { AnswerFieldProps } from "./AnswerFieldProps";

interface SelectFieldProps extends Required<AnswerFieldProps> {}

export const SelectField = ({
  formHandler,
  questionIndex,
  possibleAnswers,
}: SelectFieldProps) => {
  const { addPossibleAnswer, removePossibleAnswer } =
    useModifyPossibleAnswers(formHandler);

  return (
    <Box>
      <Stack>
        {possibleAnswers.map((_, possibleAnswerIndex) => (
          <Flex align="center" gap="sm" key={possibleAnswerIndex}>
            <Text>{possibleAnswerIndex + 1}.</Text>

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
