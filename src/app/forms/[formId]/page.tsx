import { Container, Stack } from "@mantine/core";

import { FormHeader, FormQuestion } from "@/components/forms";
import { Form } from "@/types";

export default function RespondentFormView() {
  const FORM_INFORMATION_MOCK: Form = {
    id: "UUID-0",
    title: "Encuesta sobre hábitos de vida saludable",
    description:
      "Queremos conocer más sobre tus hábitos diarios y cómo impactan tu bienestar.",
    questions: [
      {
        id: "UUID-1",
        title: "¿Cuál es tu nombre?",
        description: "Por favor, escribe tu nombre completo",
        questionType: "SHORT_ANSWER",
      },
      {
        id: "UUID-2",
        title: "Describe brevemente tu rutina de ejercicios",
        description:
          "Incluye la frecuencia y el tipo de ejercicio que realizas",
        questionType: "LONG_ANSWER",
      },
      {
        id: "UUID-3",
        title: "¿Qué tipo de alimentación sigues?",
        questionType: "CHECKBOX",
        possibleAnswers: [
          "Vegetariana",
          "Vegana",
          "Omnívora",
          "Dieta alta en proteínas",
        ],
      },
      {
        id: "UUID-4",
        title: "¿Qué actividades realizas para mantener tu bienestar mental?",
        questionType: "MULTIPLE_CHOICE",
        possibleAnswers: [
          "Meditación",
          "Ejercicio físico",
          "Lectura",
          "Tiempo con amigos y familia",
          "Escuchar música",
        ],
      },
      {
        id: "UUID-5",
        title: "Selecciona la bebida que consumes con más frecuencia",
        questionType: "SELECT",
        possibleAnswers: ["Agua", "Café", "Té", "Refrescos azucarados"],
      },
      {
        id: "UUID-6",
        title: "Sube una imagen de una comida saludable que hayas preparado",
        questionType: "UPLOAD_FILE",
      },
      {
        id: "UUID-7",
        title: "¿Qué tan saludable consideras tu estilo de vida?",
        questionType: "LINEAR_SCALE",
        possibleAnswers: [
          "Muy poco saludable",
          "Poco saludable",
          "Neutral",
          "Saludable",
          "Muy saludable",
        ],
      },
      {
        id: "UUID-8",
        title: "Califica tu nivel de estrés en una escala del 1 al 10",
        questionType: "SCORE",
        possibleAnswers: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
      },
      {
        id: "UUID-9",
        title:
          "¿Cuándo fue la última vez que hiciste un chequeo médico general?",
        questionType: "DATE",
      },
      {
        id: "UUID-10",
        title: "¿A qué hora sueles acostarte a dormir?",
        questionType: "TIME",
      },
      {
        id: "UUID-11",
        title:
          "Selecciona la fecha y hora de tu próxima actividad física planificada",
        questionType: "DATE_TIME",
      },
    ],
  };

  return (
    <Container my="md">
      <Stack>
        <FormHeader
          title={FORM_INFORMATION_MOCK.title}
          description={FORM_INFORMATION_MOCK.description}
        />

        {FORM_INFORMATION_MOCK.questions.map((question) => (
          <FormQuestion
            description={question?.description}
            key={question.id}
            possibleAnswers={question?.possibleAnswers}
            questionType={question.questionType}
            title={question.title}
          />
        ))}
      </Stack>
    </Container>
  );
}
