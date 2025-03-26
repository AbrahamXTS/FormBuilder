import { Card, Stack, Text, Title } from "@mantine/core";

import { FormHandler, Question } from "@/types";

import { FormAnswerFieldFactory } from "./FormAnswerFieldFactory";

interface FormQuestionProps {
  formHandler: FormHandler;
  question: Question;
}

export const FormQuestion = ({ formHandler, question }: FormQuestionProps) => {
  const { id, questionType, title, description, possibleAnswers } = question;

  return (
    <Card shadow="md" withBorder>
      <Stack>
        <Title order={5}>{title}</Title>

        {description && <Text>{description}</Text>}

        <FormAnswerFieldFactory
          formHandler={formHandler}
          id={id}
          possibleAnswers={possibleAnswers}
          questionType={questionType}
        />
      </Stack>
    </Card>
  );
};
