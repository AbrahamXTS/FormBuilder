import { QuestionType } from "@/types";
import { Card, Stack, Text, Title } from "@mantine/core";
import { FormAnswerFieldFactory } from "./FormAnswerFieldFactory";

interface FormQuestionProps {
  title: string;
  description?: string;
  questionType: QuestionType;
  possibleAnswers?: string[];
}

export const FormQuestion = ({
  questionType,
  title,
  description,
  possibleAnswers,
}: FormQuestionProps) => {
  return (
    <Card shadow="md" withBorder>
      <Stack>
        <Title order={5}>{title}</Title>

        {description && <Text>{description}</Text>}

        <FormAnswerFieldFactory
          possibleAnswers={possibleAnswers}
          questionType={questionType}
        />
      </Stack>
    </Card>
  );
};
