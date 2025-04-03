import { Flex, Select, Textarea, TextInput } from "@mantine/core";

import { FormInEditModeHandler, QUESTION_TYPES } from "@/types";

import { QuestionTypeSelectOption } from "./QuestionTypeSelectOption";

interface QuestionDescriptionProps {
  formHandler: FormInEditModeHandler;
  questionIndex: number;
}

export const QuestionDescription = ({
  formHandler,
  questionIndex,
}: QuestionDescriptionProps) => {
  return (
    <>
      <Flex gap="sm">
        <TextInput
          w="100%"
          {...formHandler.getInputProps(`questions.${questionIndex}.title`)}
        />
        <Select
          allowDeselect={false}
          data={QUESTION_TYPES}
          renderOption={QuestionTypeSelectOption}
          w="100%"
          {...formHandler.getInputProps(
            `questions.${questionIndex}.questionType`,
          )}
        />
      </Flex>

      <Textarea
        {...formHandler.getInputProps(`questions.${questionIndex}.description`)}
      />
    </>
  );
};
