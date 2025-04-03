import { notifications } from "@mantine/notifications";

import { FormInEditModeHandler } from "@/types";

export const useModifyForm = (form: FormInEditModeHandler) => {
  const addQuestion = () => {
    form.insertListItem(`questions`, {
      id: new Date().getTime(),
      title: "Pregunta sin título",
      description: "Pregunta sin descripción",
      questionType: "SHORT_ANSWER",
      possibleAnswers: ["Opción 1"],
    });
  };

  const removeQuestion = (questionIndex: number) => {
    if (form.getValues().questions.length === 1) {
      return notifications.show({
        autoClose: 3000,
        message: "Tu formulario debe contener por lo menos una pregunta.",
        title: "¡Hey!",
        withCloseButton: true,
      });
    }

    form.removeListItem(`questions`, questionIndex);
  };

  return {
    addQuestion: addQuestion,
    removeQuestion: removeQuestion,
  };
};
