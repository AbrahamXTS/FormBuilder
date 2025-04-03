import { notifications } from "@mantine/notifications";

import { FormInEditModeHandler } from "@/types";

export const useModifyPossibleAnswers = (form: FormInEditModeHandler) => {
  const addPossibleAnswer = (questionIndex: number) => {
    const currentPossibleAnswers =
      form.getValues().questions[questionIndex].possibleAnswers;

    form.insertListItem(
      `questions.${questionIndex}.possibleAnswers`,
      `Opción ${(currentPossibleAnswers?.length ?? 0) + 1}`,
    );
  };

  const removePossibleAnswer = (
    questionIndex: number,
    possibleAnswerIndex: number,
  ) => {
    if (
      form.getValues().questions[questionIndex].possibleAnswers?.length === 1
    ) {
      return notifications.show({
        autoClose: 3000,
        message:
          "Este tipo de pregunta debe contener por lo menos una opción de respuesta.",
        title: "¡Hey!",
        withCloseButton: true,
      });
    }

    form.removeListItem(
      `questions.${questionIndex}.possibleAnswers`,
      possibleAnswerIndex,
    );
  };

  return {
    addPossibleAnswer,
    removePossibleAnswer,
  };
};
