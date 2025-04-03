"use client";

import { useState } from "react";

import { Form } from "@/components/edit-mode";
import { Form as FormType } from "@/types";

export default function InterviewerFormView() {
  const [formInformation] = useState<FormType>({
    id: "UUID-0",
    title: "Formulario sin título",
    description: "Formulario sin descripción",
    questions: [
      {
        id: "UUID-1",
        title: "Pregunta sin título",
        description: "Pregunta sin descripción",
        questionType: "SHORT_ANSWER",
        possibleAnswers: ["Opción 1"],
      },
    ],
  });

  return formInformation ? <Form formInformation={formInformation} /> : null;
}
