import { ComboboxItem } from "@mantine/core";

export interface Question {
  id: string;
  title: string;
  description?: string;
  questionType: QuestionType;
  possibleAnswers?: string[];
}

export type QuestionType =
  | "SHORT_ANSWER"
  | "LONG_ANSWER"
  | "CHECKBOX"
  | "MULTIPLE_CHOICE"
  | "SELECT"
  | "UPLOAD_FILE"
  | "LINEAR_SCALE"
  | "SCORE"
  | "DATE"
  | "TIME"
  | "DATE_TIME";

export const QUESTION_TYPES: ComboboxItem[] = [
  { label: "Respuesta corta", value: "SHORT_ANSWER" },
  { label: "Párrafo", value: "LONG_ANSWER" },
  { label: "Varias opciones", value: "CHECKBOX" },
  { label: "Varias respuestas", value: "MULTIPLE_CHOICE" },
  { label: "Desplegable", value: "SELECT" },
  { label: "Subir archivos", value: "UPLOAD_FILE" },
  { label: "Escala lineal (Likert)", value: "LINEAR_SCALE" },
  { label: "Calificación", value: "SCORE" },
  { label: "Fecha", value: "DATE" },
  { label: "Hora", value: "TIME" },
  { label: "Fecha y hora", value: "DATE_TIME" },
];
