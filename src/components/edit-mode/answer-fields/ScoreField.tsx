import { Box, Button, Center, Rating } from "@mantine/core";

import { useModifyPossibleAnswers } from "@/hooks";

import { AnswerFieldProps } from "./AnswerFieldProps";

interface ScoreFieldProps extends Required<AnswerFieldProps> {}

export const ScoreField = ({
  formHandler,
  possibleAnswers,
  questionIndex,
}: ScoreFieldProps) => {
  const { addPossibleAnswer, removePossibleAnswer } =
    useModifyPossibleAnswers(formHandler);

  return (
    <Box>
      <Center>
        <Rating count={possibleAnswers.length} readOnly size="md" />
      </Center>

      <Center>
        <Button
          mt="md"
          onClick={() => addPossibleAnswer(questionIndex)}
          variant="transparent"
        >
          Añadir estrella
        </Button>

        <Button
          color="red"
          mt="md"
          onClick={() =>
            removePossibleAnswer(questionIndex, possibleAnswers.length - 1)
          }
          variant="transparent"
        >
          Eliminar estrella
        </Button>
      </Center>
    </Box>
  );
};
