import { Card, Divider, Stack } from "@mantine/core";

import { FormInEditModeHandler } from "@/types";

import { AnswerFieldFactory } from "./AnswerFieldFactory";
import { QuestionDescription } from "./QuestionDescription";
import { QuestionFooter } from "./QuestionFooter";

export interface QuestionProps {
  formHandler: FormInEditModeHandler;
  questionIndex: number;
}

export const Question = ({ formHandler, questionIndex }: QuestionProps) => {
  const question = formHandler.getValues().questions[questionIndex];

  return (
    <Card shadow="md" withBorder>
      <Stack>
        <QuestionDescription
          formHandler={formHandler}
          questionIndex={questionIndex}
        />

        <Divider />

        <AnswerFieldFactory
          formHandler={formHandler}
          possibleAnswers={question.possibleAnswers}
          questionIndex={questionIndex}
          questionType={question.questionType}
        />

        <Divider />

        <QuestionFooter
          formHandler={formHandler}
          questionIndex={questionIndex}
        />
      </Stack>
    </Card>
  );
};
