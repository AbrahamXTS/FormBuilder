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
      {
        id: "UUID-2",
        title: "Pregunta sin título",
        description: "Pregunta sin descripción",
        questionType: "LONG_ANSWER",
        possibleAnswers: ["Opción 1"],
      },
      {
        id: "UUID-3",
        title: "Pregunta sin título",
        description: "Pregunta sin descripción",
        questionType: "CHECKBOX",
        possibleAnswers: ["Opción 1"],
      },
      {
        id: "UUID-4",
        title: "Pregunta sin título",
        description: "Pregunta sin descripción",
        questionType: "MULTIPLE_CHOICE",
        possibleAnswers: ["Opción 1"],
      },
      {
        id: "UUID-5",
        title: "Pregunta sin título",
        description: "Pregunta sin descripción",
        questionType: "SELECT",
        possibleAnswers: ["Opción 1"],
      },
      {
        id: "UUID-6",
        title: "Pregunta sin título",
        description: "Pregunta sin descripción",
        questionType: "UPLOAD_FILE",
        possibleAnswers: ["Opción 1"],
      },
      {
        id: "UUID-7",
        title: "Pregunta sin título",
        description: "Pregunta sin descripción",
        questionType: "LINEAR_SCALE",
        possibleAnswers: ["Opción 1"],
      },
      {
        id: "UUID-8",
        title: "Pregunta sin título",
        description: "Pregunta sin descripción",
        questionType: "SCORE",
        possibleAnswers: ["Opción 1"],
      },
      {
        id: "UUID-9",
        title: "Pregunta sin título",
        description: "Pregunta sin descripción",
        questionType: "DATE",
        possibleAnswers: ["Opción 1"],
      },
      {
        id: "UUID-10",
        title: "Pregunta sin título",
        description: "Pregunta sin descripción",
        questionType: "TIME",
        possibleAnswers: ["Opción 1"],
      },
      {
        id: "UUID-11",
        title: "Pregunta sin título",
        description: "Pregunta sin descripción",
        questionType: "DATE_TIME",
        possibleAnswers: ["Opción 1"],
      },
    ],
  });

  return formInformation ? <Form formInformation={formInformation} /> : null;
}
