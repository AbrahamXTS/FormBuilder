import {
  Box,
  Button,
  CloseButton,
  Flex,
  Radio,
  Stack,
  TextInput,
  Tooltip,
} from "@mantine/core";

import { useModifyPossibleAnswers } from "@/hooks";

import { AnswerFieldProps } from "./AnswerFieldProps";

interface CheckboxFieldProps extends Required<AnswerFieldProps> {}

export const CheckboxField = ({
  formHandler,
  possibleAnswers,
  questionIndex,
}: CheckboxFieldProps) => {
  const { addPossibleAnswer, removePossibleAnswer } =
    useModifyPossibleAnswers(formHandler);

  return (
    <Box>
      <Stack>
        {possibleAnswers.map((_, possibleAnswerIndex) => (
          <Flex align="center" gap="sm" key={possibleAnswerIndex}>
            <Radio disabled />

            <TextInput
              w="100%"
              {...formHandler.getInputProps(
                `questions.${questionIndex}.possibleAnswers.${possibleAnswerIndex}`,
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
